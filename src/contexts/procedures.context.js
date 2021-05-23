import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import {useAuth} from '../contexts/user.context';
import {ProcedureService} from '../services/procedures.service'

export const ProcedureContext = createContext();

export const ProcedureProvider = ({ children }) => {

	const [procedures, setProcedures] = useState([]);
	const [loading, setLoading] = useState(true);
	
	const {user} = useAuth();
	
	useEffect(() => {

		const subscriber = ProcedureService.subscribeProcedures(user, setProcedures, setLoading)

		return subscriber; // unsubscribe on unmount

	}, []);

	async function createProcedure(newProcedure) {
		
		try {

			await ProcedureService.createProcedure({...newProcedure,user});

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}
	
	async function updateProcedure(editedProcedure) {

		
		try {

			await ProcedureService.updateProcedure(editedProcedure);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
			return
		}
	}

	
	async function deleteProcedure(procedure) {
		
		try {

			await ProcedureService.deleteProcedure(procedure);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}

	return (
		<ProcedureContext.Provider value={{ exists: !!procedures && procedures.length > 0,loading, procedures, createProcedure, updateProcedure, deleteProcedure }}>
			{children}
		</ProcedureContext.Provider>
	)

};

export function useProcedure() {
	const context = useContext(ProcedureContext);

	return context;
}


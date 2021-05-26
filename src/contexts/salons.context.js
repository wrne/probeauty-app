import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import {useAuth} from './user.context';
import {SalonService} from '../services/salons.service'

export const SalonContext = createContext();

export const SalonProvider = ({ children }) => {

	const [salons, setSalons] = useState([]);
	const [loading, setLoading] = useState(true);
	
	const {user} = useAuth();
	
	useEffect(() => {

		const subscriber = SalonService.subscribeSalons(user, setSalons, setLoading)

		return subscriber; // unsubscribe on unmount

	}, []);

	async function createSalon(newSalon) {
		
		try {

			await SalonService.createSalon({...newSalon,user});

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}
	
	async function updateSalon(editedSalon) {

		
		try {

			await SalonService.updateSalon(editedSalon);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
			return
		}
	}

	
	async function deleteSalon(Salon) {
		
		try {

			await SalonService.deleteSalon(Salon);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}

	return (
		<SalonContext.Provider value={{ exists: !!salons && salons.length > 0,loading, salons, createSalon, updateSalon, deleteSalon }}>
			{children}
		</SalonContext.Provider>
	)

};

export function useSalon() {
	const context = useContext(SalonContext);

	return context;
}


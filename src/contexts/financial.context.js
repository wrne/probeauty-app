import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import {useAuth} from './user.context';
import {FinancialService} from '../services/finances.service'

export const FinancialContext = createContext();

export const FinancialProvider = ({ children }) => {

	const [payments, setPayments] = useState([]);
	const [balance, setBalance] = useState(0);
	const [loading, setLoading] = useState(true);
	
	const {user} = useAuth();
	
	useEffect(() => {

		const subscriber = FinancialService.subscribeFinancials(user, setPayments, setLoading)

		return subscriber; // unsubscribe on unmount

	}, []);

	async function createPayment({salon, procedure, amountCharged}) {

		console.log('Create PAyment...');

		const newPayment = {
			date: Date.now(),
			salon,
			procedure,
			type: !!salon.salonPays ? 'SalonReceive' : 'UserReceive',
			valueReceived: amountCharged,
			valueToTransfer: !!salon.salonPays ? amountCharged - (amountCharged*salon.commission/100) : amountCharged*salon.commission/100,
			liquidated: false
		}
		
		try {

			await FinancialService.createPayment({...newPayment,user});
			console.log('Salon pays ',!salon.salonPays);
			if (!salon.salonPays){
				await FinancialService.updateBalance({balance: balance+amountCharged,user});
			}

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}
	
	async function updatePayment(editedPayment) {

		
		try {

			await FinancialService.updatePayment(editedPayment);
			
			console.log('Salon pays ',!salon.salonPays);
			if (!salon.salonPays){
				await FinancialService.updateBalance({balance: balance+amountCharged,user});
			}

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
			return
		}
	}
	
	async function deletePayment(idPayment) {
		
		try {

			await FinancialService.deletePayment(idPayment);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}

	return (
		<FinancialContext.Provider value={{ exists: !!payments && payments.length > 0,loading, payments, createPayment, updatePayment, deletePayment }}>
			{children}
		</FinancialContext.Provider>
	)

};

export function useFinancial() {
	const context = useContext(FinancialContext);

	return context;
}


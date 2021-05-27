import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import {useAuth} from './user.context';
import {CustomerService} from '../services/customers.service'

export const CustomersContext = createContext();

export const CustomersProvider = ({ children }) => {

	const [customers, setCustomers] = useState([]);
	const [loading, setLoading] = useState(true);
	
	const {user} = useAuth();
	
	useEffect(() => {

		const subscriber = CustomerService.subscribeCustomers(user, setCustomers, setLoading)

		return subscriber; // unsubscribe on unmount

	}, []);

	async function createCustomer(newCustomer) {
		
		try {

			await CustomerService.createCustomer({...newCustomer,user});

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}
	
	async function updateCustomer(editedCustomer) {

		
		try {

			await CustomerService.updateCustomer(editedCustomer);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
			return
		}
	}

	
	async function deleteCustomer(Customer) {
		
		try {

			await CustomerService.deleteCustomer(Customer);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}

	return (
		<CustomersContext.Provider value={{ exists: !!customers && customers.length > 0,loading, customers, createCustomer, updateCustomer, deleteCustomer }}>
			{children}
		</CustomersContext.Provider>
	)

};

export function useCustomers() {
	const context = useContext(CustomersContext);

	return context;
}


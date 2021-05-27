import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import {useAuth} from './user.context';
import {CustomerServiceService} from '../services/CustomerServices.service'

export const CustomerServicesContext = createContext();

export const CustomerServicesProvider = ({ children }) => {

	const [customerServices, setCustomerServices] = useState([]);
	const [loading, setLoading] = useState(true);
	
	const {user} = useAuth();
	
	useEffect(() => {

		const subscriber = CustomerServiceService.subscribeCustomerServices(user, setCustomerServices, setLoading)

		return subscriber; // unsubscribe on unmount

	}, []);

	async function createCustomerService(newCustomerService) {
		
		try {

			await CustomerServiceService.createCustomerService({...newCustomerService,user});

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}
	
	async function updateCustomerService(editedCustomerService) {

		
		try {

			await CustomerServiceService.updateCustomerService(editedCustomerService);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
			return
		}
	}

	
	async function deleteCustomerService(CustomerService) {
		
		try {

			await CustomerServiceService.deleteCustomerService(CustomerService);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}

	return (
		<CustomerServicesContext.Provider value={{ exists: !!customerServices && customerServices.length > 0,loading, customerServices, createCustomerService, updateCustomerService, deleteCustomerService }}>
			{children}
		</CustomerServicesContext.Provider>
	)

};

export function useCustomerServices() {
	const context = useContext(CustomerServicesContext);

	return context;
}


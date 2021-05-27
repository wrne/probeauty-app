import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

// RoutesPages
import CustomerPage from '../../../pages/customers/all.customers.page'
import CustomerDetailPage from '../../../pages/customers/detail.customer.page'

// import {getDefaultHeader,getScreenRightButtonOption} from '../general.stackroutes';


const CustomerRoutesStack = createStackNavigator();

export default function CustomerRoutes() {

	// <CustomerRoutesStack.Navigator screenOptions={getDefaultHeader()}>
		{/* options={getScreenRightButtonOption()} /> */}
	return (
		<CustomerRoutesStack.Navigator >
			<CustomerRoutesStack.Screen name="all.customers" component={CustomerPage} options={{title: 'Clientes'}}/>
			<CustomerRoutesStack.Screen name="new.customer" component={CustomerDetailPage} options={{title: 'Novo Cliente'}}/>
			<CustomerRoutesStack.Screen name="detail.customer" component={CustomerDetailPage} options={{title: 'Detalhes de Cliente'}}/>
		</CustomerRoutesStack.Navigator>
	);
};

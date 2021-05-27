import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

// RoutesPages
import CustomerServicePage from '../../../pages/customerServices/all.customerServices.page'
import CustomerServiceDetailPage from '../../../pages/customerServices/detail.customerService.page'

// import {getDefaultHeader,getScreenRightButtonOption} from '../general.stackroutes';


const CustomerServiceRoutesStack = createStackNavigator();

export default function CustomerServiceRoutes() {

	// <CustomerServiceRoutesStack.Navigator screenOptions={getDefaultHeader()}>
		{/* options={getScreenRightButtonOption()} /> */}
	return (
		<CustomerServiceRoutesStack.Navigator >
			<CustomerServiceRoutesStack.Screen name="all.customerServices" component={CustomerServicePage} options={{title: 'Atendimentos'}}/>
			<CustomerServiceRoutesStack.Screen name="new.customerService" component={CustomerServiceDetailPage} options={{title: 'Novo Atendimento'}}/>
			<CustomerServiceRoutesStack.Screen name="detail.customerService" component={CustomerServiceDetailPage} options={{title: 'Detalhes de Atendimento'}}/>
		</CustomerServiceRoutesStack.Navigator>
	);
};

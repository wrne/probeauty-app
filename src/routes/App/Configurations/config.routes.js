import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

// Pages
import ConfigPage from '../../../pages/configurations/all.configurations.page';

// Routes
import ProceduresRoutes from '../Procedures/procedures.routes'
import SalonsRoutes from '../Salons/salons.routes'
import CustomerServiceRoutes from '../CustomerServices/customerServices.routes'


// import {getDefaultHeader,getScreenRightButtonOption} from '../general.stackroutes';


const ConfigRoutesStack = createStackNavigator();

export default function configRoutes() {

	// <ConfigRoutesStack.Navigator screenOptions={getDefaultHeader()}>
		{/* options={getScreenRightButtonOption()} /> */}
	return (
		<ConfigRoutesStack.Navigator >
			<ConfigRoutesStack.Screen name="configPage" component={ConfigPage} options={{headerShown: false}}/>
			<ConfigRoutesStack.Screen name="procedures" component={ProceduresRoutes}options={{ headerShown: false }} />
			<ConfigRoutesStack.Screen name="salons" component={SalonsRoutes}options={{ headerShown: false }} />
			<ConfigRoutesStack.Screen name="customerServices" component={CustomerServiceRoutes}options={{ headerShown: false }} />
		</ConfigRoutesStack.Navigator>
	);
};

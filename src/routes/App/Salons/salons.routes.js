import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

// RoutesPages
import SalonsPage from '../../../pages/salons/all.salons.page'
import SalonsDetailPage from '../../../pages/salons/detail.salons.page'

// import {getDefaultHeader,getScreenRightButtonOption} from '../general.stackroutes';


const SalonsRoutesStack = createStackNavigator();

export default function SalonsRoutes() {

	// <SalonsRoutesStack.Navigator screenOptions={getDefaultHeader()}>
		{/* options={getScreenRightButtonOption()} /> */}
	return (
		<SalonsRoutesStack.Navigator >
			<SalonsRoutesStack.Screen name="all.salons" component={SalonsPage} options={{headerShown: false }}/>
			<SalonsRoutesStack.Screen name="new.salon" component={SalonsDetailPage} options={{title: 'Novo Salão'}}/>
			<SalonsRoutesStack.Screen name="detail.salon" component={SalonsDetailPage} options={{title: 'Detalhes de Salão'}}/>
		</SalonsRoutesStack.Navigator>
	);
};

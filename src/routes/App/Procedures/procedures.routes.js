import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

// RoutesPages
import ProceduresPage from '../../../pages/procedures/all.procedures.page'
import ProceduresDetailPage from '../../../pages/procedures/detail.procedures.page'

// import {getDefaultHeader,getScreenRightButtonOption} from '../general.stackroutes';


const ProceduresRoutesStack = createStackNavigator();

export default function ProceduresRoutes() {

	// <ProceduresRoutesStack.Navigator screenOptions={getDefaultHeader()}>
		{/* options={getScreenRightButtonOption()} /> */}
	return (
		<ProceduresRoutesStack.Navigator >
			<ProceduresRoutesStack.Screen name="all.procedures" component={ProceduresPage} options={{ headerShown: false }}/>
			<ProceduresRoutesStack.Screen name="new.procedure" component={ProceduresDetailPage}  options={{title: 'Novo Procedimento'}}/>
			<ProceduresRoutesStack.Screen name="detail.procedure" component={ProceduresDetailPage}  options={{title: 'Detalhes do Procedimento'}}/>
		</ProceduresRoutesStack.Navigator>
	);
};

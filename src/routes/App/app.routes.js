import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import testeApp from '../../pages/testeApp'

const AppStack = createStackNavigator();


export default function AppRoutes() {
	
	return (
		// <NotesProvider>
			<AppStack.Navigator >
				<AppStack.Screen name='homeTab' component={testeApp} options={{ headerShown: false }} />
			</AppStack.Navigator>
		// </NotesProvider>
	);
};

const styleDefault = {
	headerStyle: { backgroundColor: '#4da8f2' },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		// fontWeight: ''
	}
}

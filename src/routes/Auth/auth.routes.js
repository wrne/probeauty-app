import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import testeAuth from '../../pages/testeAuth';
import loginPage from '../../pages/login.page';

// import {theme} from '../theme'
// const {colors} = theme;

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
	return (
		<AuthStack.Navigator screenOptions={styleDefault} initialRouteName="login">
			<AuthStack.Screen name='login' component={loginPage} options={{ headerShown: false }} />
			<AuthStack.Screen name='create' component={testeAuth} options={{ headerShown: true }} />
		</AuthStack.Navigator>
	);
};

const styleDefault = {
	headerStyle: { backgroundColor: 'white' },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		// fontWeight: ''
	}
}

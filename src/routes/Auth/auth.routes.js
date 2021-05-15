import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import loginPage from '../../pages/auth/login.page';
import newUserPage from '../../pages/auth/newUser.page';

// import {theme} from '../theme'
// const {colors} = theme;

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
	return (
		<AuthStack.Navigator screenOptions={styleDefault} initialRouteName="login">
			<AuthStack.Screen name='login' component={loginPage} options={{ headerShown: false }} />
			<AuthStack.Screen name='create' component={newUserPage} options={{ headerShown: true, title: 'Novo Usuário'}} />
		</AuthStack.Navigator>
	);
};

const styleDefault = {
	headerStyle: { backgroundColor: '#A4C9FF' },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		// fontWeight: ''
	}
}

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contexts/user.context';
import Routes from './src/routes/main.routes'

export default function App() {
	return (
		<AuthProvider>
			<NavigationContainer>
				<Routes/>
			</NavigationContainer>
		</AuthProvider>
	);
}

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import {useAuth} from '../contexts/user.context';
import AppRoutes from './App/app.routes';
import AuthRoutes from './Auth/auth.routes';

export default function Routes() {
	
	const { signed, loading } = useAuth();
	
	if (loading) {
		
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#666"></ActivityIndicator>
			</View>
		)

	} else {

		return signed ? <AppRoutes /> : <AuthRoutes />
		
	}
};
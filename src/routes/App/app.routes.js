import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Contexts Providers
import { ProcedureProvider } from '../../contexts/procedures.context';
import { SalonProvider } from '../../contexts/salons.context';
import { CustomersProvider } from '../../contexts/customers.context';
import { CustomerServicesProvider } from '../../contexts/customerService.context';

// Pages
// import ConfigurationPage from '../../pages/configurations/all.configurations.page'
// import CustomersPage from '../../pages/customers/all.customers.page'
import FinancesPage from '../../pages/finances/all.finances.page'
import ProceduresPage from '../../pages/procedures/all.procedures.page'
import HomePage from '../../pages/home.page'

// Routes
import ConfigurationRoutes from './Configurations/config.routes'
import CustomersRoutes from './Customers/customers.routes'


import { colors } from '../../styles'


const AppTabBotton = createBottomTabNavigator();


export default function AppRoutes() {

	return (

		<ProcedureProvider>
			<SalonProvider>
				<CustomersProvider>
					<CustomerServicesProvider>
						<AppTabBotton.Navigator
							screenOptions={({ route }) => ({
								tabBarIcon: ({ color, size }) => {
									let iconName;

									switch (route.name) {
										case 'finances':
											iconName = 'payments';
											break;
										case 'customers':
											iconName = 'people';
											break;
										case 'home':
											iconName = 'home';
											break;
										case 'config':
											iconName = 'settings';
											break;
										default:
											iconName = 'brush';
											break;

									}

									return <Icon name={iconName} size={size} color={color} />;
								},
							})}
							tabBarOptions={{
								activeTintColor: colors.mainB,
								inactiveTintColor: '#777',
								activeBackgroundColor: colors.dark,
								inactiveBackgroundColor: colors.dark,
								showLabel: true,
								style: {
									height: 60
								}
							}}
						>
							<AppTabBotton.Screen name="home" component={HomePage} options={{ tabBarLabel: 'Home' }} />
							<AppTabBotton.Screen name="customers" component={CustomersRoutes} options={{ tabBarLabel: 'Clientes' }} />
							<AppTabBotton.Screen name="newProcedure" component={ProceduresPage} />
							<AppTabBotton.Screen name="finances" component={FinancesPage} options={{ tabBarLabel: 'Finanças' }} />
							<AppTabBotton.Screen name="config" component={ConfigurationRoutes} options={{ tabBarLabel: 'Configurações' }} />
						</AppTabBotton.Navigator>

					</CustomerServicesProvider>
				</CustomersProvider>
			</SalonProvider>
		</ProcedureProvider>

	);
};

const styleDefault = {
	headerStyle: { backgroundColor: '#4da8f2' },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		// fontWeight: ''
	}
}


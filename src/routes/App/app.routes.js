import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons';

// Contexts Providers
import { ProcedureProvider } from '../../contexts/procedures.context';
import { SalonProvider } from '../../contexts/salons.context';
import { CustomersProvider } from '../../contexts/customers.context';
import { CustomerServicesProvider } from '../../contexts/customerService.context';
import { FinancialProvider } from '../../contexts/financial.context';

// Pages
// import ConfigurationPage from '../../pages/configurations/all.configurations.page'
// import CustomersPage from '../../pages/customers/all.customers.page'
import FinancesPage from '../../pages/finances/all.finances.page'
import ProceduresPage from '../../pages/procedures/all.procedures.page'
import HomePage from '../../pages/home.page'

// Routes
import ConfigurationRoutes from './Configurations/config.routes'
import CustomersRoutes from './Customers/customers.routes'
import CustomerServiceRoutes from './CustomerServices/customerServices.routes'
import FinancialRoutes from './Finances/financial.routes'

import { colors } from '../../styles'


const AppTabBotton = createBottomTabNavigator();
const AppStack = createStackNavigator();

function TabRoutes() {
	return (
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
						case 'customerServices':
							iconName = 'face';
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
				activeTintColor: '#4671C6',
				inactiveTintColor: '#888',
				activeBackgroundColor: '#FFF',
				inactiveBackgroundColor: '#FFF',
				keyboardHidesTabBar: true,
				showLabel: true,
				style: {
					height: 60,
					elevation: 5,
					borderTopWidth: 0,
				}
			}}
		>
			<AppTabBotton.Screen
				name="home"
				component={HomePage}
				options={{ tabBarLabel: 'Home' }}
			/>
			<AppTabBotton.Screen
				name="customers"
				component={CustomersRoutes}
				options={{ tabBarLabel: 'Clientes' }}
				listeners={({ navigation, route }) => ({
					tabPress: e => {
						// Prevent default action
						e.preventDefault();
						// Do something with the `navigation` object
						navigation.navigate('customers', { screen: 'all.customers' });
					},
				})} />
			<AppTabBotton.Screen
				name="newProcedure"
				component={ProceduresPage} />
			<AppTabBotton.Screen
				name="finances"
				component={FinancialRoutes}
				options={{ tabBarLabel: 'Finanças' }}
				listeners={({ navigation, route }) => ({
					tabPress: e => {
						// Prevent default action
						e.preventDefault();
						// Do something with the `navigation` object
						navigation.navigate('finances', { screen: 'all.financials' });
					},
				})} />
			<AppTabBotton.Screen
				name="customerServices"
				component={CustomerServiceRoutes}
				options={{ tabBarLabel: 'Atendimentos' }}
				listeners={({ navigation, route }) => ({
					tabPress: e => {
						// Prevent default action
						e.preventDefault();
						// Do something with the `navigation` object
						navigation.navigate('customerServices', { screen: 'all.customerServices' });
					},
				})} />
			{/* <AppTabBotton.Screen
				name="config"
				component={ConfigurationRoutes}
				options={{ tabBarLabel: 'Configurações' }}
				listeners={({ navigation, route }) => ({
					tabPress: e => {
						// Prevent default action
						e.preventDefault();
						// Do something with the `navigation` object
						navigation.navigate('config', { screen: 'configPage' });
					},
				})}
			/> */}
		</AppTabBotton.Navigator>
	)
}

export default function AppRoutes() {

	return (

		<ProcedureProvider>
			<SalonProvider>
				<CustomersProvider>
					<FinancialProvider>
						<CustomerServicesProvider>
							<AppStack.Navigator mode="modal">
								<AppStack.Screen name="main" component={TabRoutes} options={{ headerShown: false }}/>
								<AppStack.Screen name="config" component={ConfigurationRoutes} options={{ headerShown: false }}/>
							</AppStack.Navigator>
						</CustomerServicesProvider>
					</FinancialProvider>
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


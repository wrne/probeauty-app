import React from 'react'
import { ScrollView, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/005-beleza.png'
import avatar from '../../assets/LogoPV_Preto.png'
import { colors, metrics } from '../styles'
import { useAuth } from '../contexts/user.context'
import Header from '../components/header'
import { useCustomers } from '../contexts/customers.context';
import { useCustomerServices } from '../contexts/customerService.context';
function Card({ children, icon, size, color, text, onPress }) {
	return (
		<View style={styles.cardContainer}>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Icon name={icon} size={size} color={color}></Icon>
				<Text style={styles.textButton}>{text}</Text>
			</TouchableOpacity>
		</View>
	)
}
export default function HomePage({ navigation }) {
	const { user } = useAuth()
	const { createCustomer } = useCustomers();
	const { createCustomerService } = useCustomerServices();

	function goToNewCustomer() {

		navigation.navigate('customers', {
			screen: 'new.customer',
			params: {
				operation: 'insert',
				buttonAction: createCustomer
			}
		})
	}

	function goToNewCustomerService() {

		navigation.navigate('config', {
			screen: 'customerServices',
			params: {
				screen: 'new.customerService',
				params: {
					operation: 'insert',
					buttonAction: createCustomerService
				}
			}
		})
	}

	return (

		<SafeAreaView style={styles.background}>
			<StatusBar
				barStyle={colors.statusBarStyle}
				backgroundColor={colors.background}
			/>
			<Header />
			<View style={styles.container}>
				<View style={styles.containerHeader}>
					<View>
						<Text style={styles.textHello}>Olá</Text>
						<Text style={styles.textName}>{user.name}!</Text>
					</View>
					<View style={styles.avatarContainer}>						
						<Image source={avatar} style={styles.avatar} />
					</View>
				</View>

				<View style={{ width: '100%', height: '60%', alignItems: 'center' }}>
					<Image source={logo} style={styles.img} />
				</View>
			</View>

			<View style={styles.container}>
				<Text>O que deseja fazer?</Text>
				<View style={styles.containerButtons}>

					{/* <ScrollView horizontal={true} style={{ height: '30%', width: '100%' }} > */}

					<Card icon="brush" size={48} color={colors.actionButton} text="Novo Atendimento" onPress={goToNewCustomerService} />
					<Card icon="person" size={48} color={colors.actionButton} text="Nova Cliente" onPress={goToNewCustomer} />
					{/* <Card icon="money" size={48} color="#999" text="Finanças" /> */}

					{/* </ScrollView> */}
				</View>

			</View>
		</SafeAreaView >
	)
}


const styles = StyleSheet.create({
	background: {
		height: '100%',
		backgroundColor: colors.boxBackground
	},
	container: {
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
		padding: 10,
		height: '42%', // Corrigir condiderando 100% menos altura da TabBar
		borderRadius: 10,
		justifyContent: 'space-around',
		backgroundColor: colors.background,
	},
	containerHeader: {
		flexDirection: 'row',
		width: '100%',
		height: '30%',
		justifyContent: 'space-between',
	},
	img: {
		height: '100%',
		resizeMode: 'contain'
	},
	avatarContainer: {
		// flex: 1,
		width: 75,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.boxBackground,
		borderRadius: 50,
	},
	avatar: {
		// flex: 1,
		height: '100%',
		resizeMode: 'contain',
	},
	cardContainer: {
		width: '45%',
		height: '100%',
		backgroundColor: colors.boxBackground,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		// marginBottom: 20,

		borderRadius: metrics.borderRadius,
		elevation: 10,
	},
	textHello: {
		fontSize: 22,
	},
	textName: {
		fontSize: 32,
		fontWeight: 'bold'
	},
	containerButtons: {
		flexDirection: 'row',
		height: '70%',
		width: '100%'
		// alignItems: 'center',
		// justifyContent: 'space-around',
		// marginBottom: 30,
	},
	button: {
		// backgroundColor: 'gray',
		width: '100%',
		height: '100%',
		// marginTop: 30,
		// borderRadius: 80,
		alignItems: 'center',
		justifyContent: 'center'


	},
	textButton: {
		fontSize: 12,
		color: colors.actionButton
	}
})

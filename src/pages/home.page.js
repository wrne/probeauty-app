import React from 'react'
import { ScrollView, SafeAreaView, StatusBar, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/005-beleza.png'
import avatar from '../../assets/LogoPV_Preto.png'
import {Container,Header} from '../components/container'
import { colors, metrics } from '../styles'
import { useAuth } from '../contexts/user.context'
import { useCustomers } from '../contexts/customers.context';
import { useCustomerServices } from '../contexts/customerService.context';
import { Text } from '../components/basics';

function Card({ children, icon, size, color, text, onPress }) {
	return (
		<View style={styles.cardContainer}>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Icon name={icon} size={size} color={colors.iconDark}></Icon>
				<Text small bold color={colors.textHighlight}>{text}</Text>
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

	function goToSalons() {

		navigation.navigate('config', {
			screen: 'salons',
			params: {
				screen: 'all.salons',				
			}
		})
	}

	function goToFinances() {

		navigation.navigate('finances', {
			screen: 'all.financials'
		})
	}

	return (

		<Container>
			{/* <StatusBar
				barStyle={colors.statusBarStyle}
				backgroundColor={colors.boxBackground}
			/>*/}
			<Header /> 
			<View style={styles.firstcontainer}>
				{/* <View style={styles.containerHeader}> */}
				<View>
					<Text large bold dark>Olá</Text>
					<Text title heavy dark>{user.name}!</Text>
				</View>
				{/* <View style={styles.avatarContainer}>						
						<Image source={avatar} style={styles.avatar} />
					</View> */}
				{/* </View> */}

				{/* <View style={{ width: '100%', height: '60%', alignItems: 'center' }}>
					<Image source={avatar} style={styles.img} />
				</View> */}
			</View>

			<View style={styles.container}>
				<View style={{margin:12}}>

					<Text bold center >O que deseja fazer?</Text>
				</View>
				<View style={styles.containerButtons}>

					{/* <ScrollView horizontal={true} style={{ height: '30%', width: '100%' }} > */}

					<Card icon="brush" size={48} color={colors.actionButton} text="Novo Atendimento" onPress={goToNewCustomerService} />
					<Card icon="person" size={48} color={colors.actionButton} text="Nova Cliente" onPress={goToNewCustomer} />
					<Card icon="store" size={48} color={colors.actionButton} text="Salões" onPress={goToSalons} />
					<Card icon="payments" size={48} color={colors.actionButton} text="Finanças" onPress={goToFinances} />
					

					{/* </ScrollView> */}
				</View>

			</View>
		</Container >
	)
}


const styles = StyleSheet.create({
	background: {
		height: '100%',
		backgroundColor: '#FFF'
	},
	firstcontainer: {
		// marginLeft: 20,
		// marginRight: 20,
		// marginBottom: 20,
		padding: 10,
		height: '15%', // Corrigir condiderando 100% menos altura da TabBar
		// borderRadius: 10,
		// borderBottomLeftRadius: 30,
		// borderBottomRightRadius: 30,
		// justifyContent: 'space-around',
		backgroundColor: colors.boxBackground,

	},
	container: {
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 10,
		padding: 10,
		// height: '72%', // Corrigir condiderando 100% menos altura da TabBar
		borderRadius: 4,
		// justifyContent: 'space-around',
		backgroundColor: colors.background,
	},
	containerHeader: {
		flexDirection: 'row',
		width: '100%',
		height: '30%',
		justifyContent: 'space-between',
	},
	img: {
		// height: '100%',
		height: 100,
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
		width: '44%',
		// height: '100%',
		backgroundColor: colors.boxBackground,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		// marginBottom: 20,

		borderRadius: metrics.borderRadius,
		elevation: 10,
	},
	// textHello: {
	// 	fontSize: 22,
	// },
	// textName: {
	// 	fontSize: 32,
	// 	fontFamily: 'Montserrat-Thin',
	// 	// fontWeight: '200'
	// },
	containerButtons: {
		flexDirection: 'row',
		height: '70%',
		width: '100%',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-around',
		// marginBottom: 30,
	},
	button: {
		// backgroundColor: 'gray',
		width: '100%',
		height: '60%',
		// marginTop: 30,
		// borderRadius: 80,
		alignItems: 'center',
		justifyContent: 'center'

	},
})

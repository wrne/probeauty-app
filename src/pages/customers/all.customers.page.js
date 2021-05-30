import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ListItens from '../../components/listItens'
import Header from '../../components/header'
import { useCustomers } from '../../contexts/customers.context'
import logo from '../../../assets/001-women.png'
import { colors, metrics } from '../../styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Customers({ navigation }) {
	const { customers, loading, exists, createCustomer, updateCustomer, deleteCustomer } = useCustomers();


	function goToNewCustomerPage() {

		navigation.navigate('new.customer', {
			operation: 'insert',
			buttonAction: createCustomer
		})
	};

	function NewCustomerButton() {
		return (
			<View style={styles.button}>
				<TouchableOpacity onPress={goToNewCustomerPage}>
					<Text>Cadastre um Cliente ;)</Text>
				</TouchableOpacity>
			</View>
		)
	};

	if (loading) {
		return (
			<SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text>Carregando...</Text>
			</SafeAreaView>
		)
	};

	if (exists) {

		//Definindo lista compatível com o comp. ListItens
		const listCustomers = customers.map((item) => {
			return {
				title: item.name,
				// content: item.address,
				customer: item
			}
		})

		//Definindo ações
		function actionPress(item) {


			navigation.navigate('detail.customer', {
				operation: 'update',
				buttonAction: updateCustomer,
				customer: item.customer
			})

			// Alert.alert('Procedimento', `Procedimento: ${item.Customer.description}\nValor: ${item.Customer.value}`)
		};

		function actionMenu(item) {
			deleteCustomer(item.customer.id)
		};

		return (
			<SafeAreaView style={styles.container}>

				<Header/>
				<View style={{ width: '100%', height: '40%', alignItems: 'center' }}>
					<Image source={logo} style={styles.img} />
				</View>

				<View style={styles.containerList}>

					<View style={styles.headerList}>

						<Text style={styles.title}>Clientes</Text>

						<TouchableOpacity onPress={goToNewCustomerPage}>
							<Icon name="add" size={32} color={colors.iconDark} />
						</TouchableOpacity>
					</View>

					<ListItens content={listCustomers} actionPressItem={actionPress} actionMenuItem={actionMenu} icon="delete" />
				</View>
				{/* <View style={{ height: '8%', alignItems: 'center', margin: 10 }}>
					<NewCustomerButton />
				</View> */}
			</SafeAreaView>
		)
	} else {

		return (
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<NewCustomerButton />
			</SafeAreaView>

		)
	};
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.title,
		// marginBottom: 10
		paddingBottom: 10,


	},
	img: {
		height: '100%',
		resizeMode: 'contain'
	},
	containerList: {
		backgroundColor: colors.boxBackground,
		height: '45%',
		margin: 10,
		padding: 10,

		borderRadius: metrics.borderRadius
	},
	headerList: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 5,
		borderBottomWidth: 1,
		borderColor: '#888'
	},

	button: {
		backgroundColor: colors.actionButton,
		height: '100%',
		width: '70%',
		alignItems: 'center',
		justifyContent: 'center',

		borderRadius: metrics.borderRadius
	}
})

import React from 'react'
import { Text, SafeAreaView, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import ListItens from '../../components/listItens'
import { useCustomers } from '../../contexts/customers.context'

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
			<TouchableOpacity onPress={goToNewCustomerPage}>
				<Text>Cadastre um Cliente ;)</Text>
			</TouchableOpacity>
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
				<NewCustomerButton />
				<ListItens content={listCustomers} actionPressItem={actionPress} actionMenuItem={actionMenu} icon="delete" />
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
	}
})

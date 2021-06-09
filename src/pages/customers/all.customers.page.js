import React from 'react'
import { View, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ListItens from '../../components/listItens'
import { Container,ContainerList, Header } from '../../components/container'
import { Text } from '../../components/basics'

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

		};

		function actionMenu(item) {
			deleteCustomer(item.customer.id)
		};

		return (
			<Container>

				<Header />

				<View style={{ width: '100%', height: '30%', alignItems: 'center' }}>
					<Image source={logo} style={styles.img} />
				</View>

				<ContainerList listTitle="Clientes" onPress={goToNewCustomerPage}>
					<ListItens content={listCustomers} actionPressItem={actionPress} actionMenuItem={actionMenu} icon="delete" />
				</ContainerList>

			</Container>
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

	img: {
		height: '100%',
		resizeMode: 'contain'
	},

})

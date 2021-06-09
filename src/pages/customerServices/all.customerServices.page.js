import React from 'react'
import { View, Image, Text, SafeAreaView, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { Container, ContainerList, Header } from '../../components/container'
import ListItens from '../../components/listItens'
import { useCustomerServices } from '../../contexts/customerService.context'
import logo from '../../../assets/003-lashes.png'

export default function CustomerServices({ navigation }) {
	const { customerServices, loading, exists, createCustomerService, updateCustomerService, deleteCustomerService } = useCustomerServices();


	function goToNewCustomerServicePage() {

		navigation.navigate('new.customerService', {
			operation: 'insert',
			buttonAction: createCustomerService
		})
	};

	function NewCustomerServiceButton() {
		return (
			<TouchableOpacity onPress={goToNewCustomerServicePage}>
				<Text>Cadastre um Atendimento ;)</Text>
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
		const listCustomerServices = customerServices.map((item) => {
			return {
				title: item.customer.name,
				content: item.date,
				customerService: item
			}
		})

		//Definindo ações
		function actionPress(item) {


			navigation.navigate('detail.customerService', {
				operation: 'update',
				buttonAction: updateCustomerService,
				customerService: item.customerService
			})

			// Alert.alert('Procedimento', `Procedimento: ${item.CustomerService.description}\nValor: ${item.CustomerService.value}`)
		};

		function actionMenu(item) {
			deleteCustomerService(item.customerService.id)
		};

		return (
			<Container>

				<Header />

				<View style={{ width: '100%', height: '30%', alignItems: 'center' }}>
					<Image source={logo} style={styles.img} />
				</View>

				<ContainerList listTitle="Atendimentos" onPress={goToNewCustomerServicePage}>
					<ListItens content={listCustomerServices} actionPressItem={actionPress} actionMenuItem={actionMenu} icon="delete" />
				</ContainerList>

			</Container>
		)
	} else {

		return (
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<NewCustomerServiceButton />
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

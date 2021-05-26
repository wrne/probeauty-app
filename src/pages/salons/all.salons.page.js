import React from 'react'
import { Text, SafeAreaView, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import ListItens from '../../components/listItens'
import { useSalon } from '../../contexts/salons.context'

export default function Salons({ navigation }) {
	const { salons, loading, exists, createSalon, updateSalon, deleteSalon } = useSalon();

	
	function goToNewSalonPage() {

		navigation.navigate('new.salon', {
			operation: 'insert',
			buttonAction: createSalon
		})
	};

	function NewSalonButton() {
		return (
			<TouchableOpacity onPress={goToNewSalonPage}>
				<Text>Cadastre um Salão ;)</Text>
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
		const listSalons = salons.map((item) => {
			return {
				title: item.name,
				content: item.address,
				salon: item
			}
		})

		//Definindo ações
		function actionPress(item) {


			navigation.navigate('detail.salon', {
				operation: 'update',
				buttonAction: updateSalon,
				salon: item.salon
			})

			// Alert.alert('Procedimento', `Procedimento: ${item.Salon.description}\nValor: ${item.Salon.value}`)
		};

		function actionMenu(item) {
			deleteSalon(item.salon.id)
		};

		return (
			<SafeAreaView style={styles.container}>
				<NewSalonButton />
				<ListItens content={listSalons} actionPressItem={actionPress} actionMenuItem={actionMenu} icon="delete" />
			</SafeAreaView>
		)
	} else {

		return (
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<NewSalonButton />
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

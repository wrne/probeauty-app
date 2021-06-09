import React from 'react'
import { View, Image,Text, SafeAreaView, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import ListItens from '../../components/listItens'
import logo from '../../../assets/eyebrow.png'
import { useProcedure } from '../../contexts/procedures.context'

import { Container,ContainerList, Header } from '../../components/container'

export default function Procedures({ navigation }) {
	const { procedures, loading, exists, createProcedure, updateProcedure, deleteProcedure } = useProcedure();


	function goToNewProcedurePage() {

		navigation.navigate('new.procedure', {
			operation: 'insert',
			buttonAction: createProcedure
		})
	};

	function NewProcedureButton() {
		return (
			<TouchableOpacity onPress={goToNewProcedurePage}>
				<Text>Cadastre um Procedimento ;)</Text>
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
		const listProcedures = procedures.map((item) => {
			return {
				title: item.description,
				content: item.cost,
				procedure: item
			}
		})

		//Definindo ações
		function actionPress(item) {


			navigation.navigate('detail.procedure', {
				operation: 'update',
				buttonAction: updateProcedure,
				procedure: item.procedure
			})

			// Alert.alert('Procedimento', `Procedimento: ${item.procedure.description}\nValor: ${item.procedure.value}`)
		};

		function actionMenu(item) {
			deleteProcedure(item.procedure.id)
		};

		return (
			<Container>

				<Header />

				<View style={{ width: '100%', height: '30%', alignItems: 'center' }}>
					<Image source={logo} style={styles.img} />
				</View>

				<ContainerList listTitle="Procedimentos" onPress={goToNewProcedurePage}>
					<ListItens content={listProcedures} actionPressItem={actionPress} actionMenuItem={actionMenu} icon="delete" />
				</ContainerList>

			</Container>
		)
	} else {

		return (
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<NewProcedureButton />
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

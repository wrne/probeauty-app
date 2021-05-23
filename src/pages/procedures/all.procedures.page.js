import React from 'react'
import { Text, SafeAreaView, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import ListItens from '../../components/listItens'
import { useProcedure } from '../../contexts/procedures.context'

export default function Procedures({ navigation }) {
	const { procedures, loading, exists } = useProcedure();

	if (loading) {
		return (
			<SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text>Carregando...</Text>
			</SafeAreaView>
		)
	};

	if (exists) {

		console.log('Existem procs', procedures);
		//Definindo lista compatível com o comp. ListItens
		const listProcedures = procedures.map((item) => {
			return {
				title: item.description,
				content: item.value,
				procedure: item
			}
		})

		//Definindo ações
		function actionPress(item) {
			Alert.alert('Procedimento', `Procedimento: ${item.procedure.description}\nValor: ${item.procedure.value}`)
		};

		function actionMenu(item) {
			Alert.alert('Procedimento via Menu', `Procedimento: ${item.procedure.description}\nValor: ${item.procedure.value}`)
		};

		return (
			<SafeAreaView style={styles.container}>
				<ListItens content={listProcedures} actionPressItem={actionPress} actionMenuItem={actionMenu} />
			</SafeAreaView>
		)
	} else {
		console.log('Cadastre um proc');

		function newProcedureAction() {

			navigation.navigate('procedureDetail', {
				note: inicialNote,
				operation: 'insert',
				insertAction: addNewNote
			})
		};


		return (
			<SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity onPress={newProcedureAction}>
					<Text>Cadastre um Procedimento ;)</Text>
				</TouchableOpacity>
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

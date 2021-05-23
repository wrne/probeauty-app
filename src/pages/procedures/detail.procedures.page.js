import React, { useState } from 'react'
import {ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {  } from 'react-native-gesture-handler'

export default function DetailProcedure({ route, navigation }) {


	const { procedure, operation, buttonAction } = route.params;

	const [description, setDescription] = useState(!!procedure?.description ? procedure.description : "")
	const [value, setValue] = useState(!!procedure?.value ? procedure.value : 0)

	async function handleAction() {

		if (operation === 'delete'){
			await buttonAction(procedure?.id)
		} else {

			const editProcedure = {
				...procedure,
				description,
				value
			}
	
			// executa método de edição do procediento
			await buttonAction(editProcedure)

		}

		// rediciona para 'All Procedures'
		navigation.navigate('procedures', { screen: 'all.procedures' });

	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} >
				<TextInput style={styles.text} onChangeText={(t)=>setDescription(t)} placeholder="Descrição" />
				<TextInput style={styles.text} onChangeText={(t)=>setValue(t)} placeholder="Valor" />
				<TouchableOpacity style={styles.button} onPress={handleAction}>
					<Text>{operation === 'insert' ? 'Criar' : 'Salvar Alterações'}</Text>
				</TouchableOpacity>
			</ScrollView>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
	},
	scrollView: {
		
	},
	text: {
		fontSize: 12,
	},
	button:{
		width: '90%',
		height: 40,
		backgroundColor: 'gray',

		alignItems: 'center',
		justifyContent: 'center'
	},
});
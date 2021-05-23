import React, { useState } from 'react'
import {ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {  } from 'react-native-gesture-handler'

export default function DetailProcedure({ route, navigation }) {


	const { procedure, operation, buttonAction } = route.params;
	console.log('DetailProcedure:',procedure?.description);

	const [description, setDescription] = useState(!!procedure?.description ? procedure.description : "")
	const [cost, setCost] = useState(!!procedure?.cost ? procedure.cost : 0)

	async function handleAction() {


		const editProcedure = {
			...procedure,
			description,
			cost
		}
		
		// executa método de edição do procediento
		await buttonAction(editProcedure)


		// rediciona para 'All Procedures'
		navigation.navigate('procedures', { screen: 'all.procedures' });

	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} >
				<TextInput style={styles.text} onChangeText={(t)=>setDescription(t)} placeholder="Descrição" value={description}/>
				<TextInput style={styles.text} onChangeText={(t)=>setCost(t)} placeholder="Valor" value={cost}/>
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
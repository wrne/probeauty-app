import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
// import {  } from 'react-native-gesture-handler'
import { Container, Box } from '../../components/container';
import { Input, Text, ActionButton } from '../../components/basics';

export default function DetailProcedure({ route, navigation }) {


	const { procedure, operation, buttonAction } = route.params;
	console.log('DetailProcedure:', procedure?.description);

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
		<Container center>
			<ScrollView style={styles.scrollView} >
				<Box >
					{operation !== 'insert' && <Text tiny>Procedimento</Text>}
					<Input onChangeText={(t) => setDescription(t)} placeholder="Descrição" value={description} />
					{operation !== 'insert' && <Text tiny>Preço</Text>}
					<Input onChangeText={(t) => setCost(t)} placeholder="Valor" value={cost} />
				</Box>
				{/* <TouchableOpacity style={styles.button} onPress={handleAction}> */}
				<View style={{ alignItems: 'center' }}>
					<ActionButton onPress={handleAction}>
						<Text large>{operation === 'insert' ? 'Criar' : 'Salvar Alterações'}</Text>
					</ActionButton>
				</View>
			</ScrollView>

		</Container>
	)
}

const styles = StyleSheet.create({

	scrollView: {
		width: '92%',
	},
});
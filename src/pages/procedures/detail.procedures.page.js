import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function DetailProcedure({ route, navigation }) {


	const { procedure, operation, insertAction, editAction, delAction } = route.params;

	const [description, setDescription] = useState(!!procedure.description ? procedure.description : "")
	const [value, setValue] = useState(!!procedure.value ? procedure.value : 0)

	async function handleInsert() {

		const newProcedure = {
			description,
			value
		}

		// executa método de gravação do procedimento
		await insertAction(newProcedure)
		// rediciona para 'All Procedures'
		navigation.navigate('procedures', { screen: 'all.procedures' });

	}

	async function handleEdit() {

		const editProcedure = {
			...procedure,
			description,
			value
		}

		// executa método de edição do procediento
		await editAction(editProcedure)
		// rediciona para 'All Procedures'
		navigation.navigate('procedures', { screen: 'all.procedures' });

	}

	async function handleDelete() {

		// executa método de exclusão do procedimento
		await delAction(procedure.id);
		// rediciona para 'All Procedures'
		navigation.navigate('procedures', { screen: 'all.procedures' });

	}


	return (
		<View>
			<Text>Detail Procedure</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

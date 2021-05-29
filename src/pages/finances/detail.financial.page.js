import React, { useState } from 'react'
import {ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DetailPayment({ route, navigation }) {


	const { payment, operation, buttonAction } = route.params;

	const [date, setDate] = useState(!!payment?.date ? payment.date : '')
	const [salon, setSalon] = useState(!!payment?.salon ? payment.salon : '')
	const [procedure, setProcedure] = useState(!!payment?.procedure ? payment.procedure : '')
	const [type, setType] = useState(!!payment?.type ? payment.type : '')
	const [valueReceived, setValueReceived] = useState(!!payment?.valueReceived ? payment.valueReceived : '')
	const [valueToTransfer, setValueToTransfer] = useState(!!payment?.valueToTransfer ? payment.valueToTransfer : '')
	const [liquidated, setLiquidated] = useState(!!payment?.liquidated ? payment.liquidated : '')

	async function handleAction() {

		if (liquidated){
			Alert.alert('Atenção','Titulo está quitado. Não pode ser editado.')
			return
		}
		
		const editpayment = {
			...payment,
			date,
			salon,
			procedure,
			type,
			valueReceived,
			valueToTransfer,
			liquidated
		}
		
		// executa método de edição do procediento
		await buttonAction(editpayment)

		// rediciona para 'All payments'
		navigation.navigate('finances', { screen: 'all.financials' });

	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} >

				<TextInput style={styles.text} onChangeText={(t)=>setDate(t)} placeholder="date" value={date.toString()}/>
				<TextInput style={styles.text} onChangeText={(t)=>setSalon(t)} placeholder="salon" value={salon.name}/>
				<TextInput style={styles.text} onChangeText={(t)=>setProcedure(t)} placeholder="procedure" value={procedure.description}/>
				<TextInput style={styles.text} onChangeText={(t)=>setType(t)} placeholder="type" value={type}/>
				<TextInput style={styles.text} onChangeText={(t)=>setValueReceived(t)} placeholder="valueReceived" value={valueReceived.toString()}/>
				<TextInput style={styles.text} onChangeText={(t)=>setValueToTransfer(t)} placeholder="valueToTransfer" value={valueToTransfer.toString()}/>
				<TextInput style={styles.text} onChangeText={(t)=>setLiquidated(t)} placeholder="liquidated" value={liquidated ? 'Quitado' : 'Pendente'}/>

				<TouchableOpacity style={styles.button} onPress={handleAction}>
					<Text>{operation === 'insert' ? 'Criar' : 'Salvar AltArações'}</Text>
				</TouchableOpacity>
		</ScrollView>

	</SafeAreaView>	)
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
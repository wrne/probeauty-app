import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
// import {  } from 'react-native-gesture-handler';

import { useProcedure } from '../../contexts/procedures.context'
import { useSalon } from '../../contexts/salons.context'
import { useCustomers } from '../../contexts/customers.context'

export default function DetailCustomerService({ route, navigation }) {


	const { customerService, operation, buttonAction } = route.params;

	const {customers} = useCustomers();
	const { salons} = useSalon();
	const {procedures} = useProcedure();

	const [date, setDate] = useState(!!customerService?.date ? customerService.date : '')
	const [amountCharged, setAmountCharged] = useState(!!customerService?.amountCharged ? customerService.amountCharged : '')
	const [customer, setCustomer] = useState(!!customerService?.customer ? customerService.customer : {})
	const [salon, setSalon] = useState(!!customerService?.salon ? customerService.salon : {})
	const [procedure, setProcedure] = useState(!!customerService?.procedure ? customerService.procedure : {})
	

	// useEffect(() => {
	// 	effect
	// 	return () => {
	// 		cleanup
	// 	}
	// }, [customer, salon, procedure])

	async function handleAction() {


		const editCustomerService = {
			...customerService,
			date,
			amountCharged,
			customer,
			salon,
			procedure
		}

		// executa método de edição do procediento
		await buttonAction(editCustomerService)

		// rediciona para 'All CustomerServices'
		navigation.navigate('customerServices', { screen: 'all.customerServices' });

	}
	
	function renderCustomer({ item }) {

		return (
			<View style={styles.itemContainer} >
				<TouchableOpacity
					onPress={() => { setCustomer(item) }}
					// style={styles.textArea} 
					>
					<View>
						<Text>{item.name}</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
	
	function renderSalon({ item }) {

		return (
			<View style={styles.itemContainer} >
				<TouchableOpacity
					onPress={() => { setSalon(item) }}
					// style={styles.textArea} 
					>
					<View>
						<Text>{item.name}</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
	
	function renderProcedures({ item }) {

		return (
			<View style={styles.itemContainer} >
				<TouchableOpacity
					onPress={() => { setProcedure(item) }}
					// style={styles.textArea} 
					>
					<View>
						<Text>{item.description}</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} >

				<TextInput style={styles.text} onChangeText={(t) => setDate(t)} placeholder="date" value={date} />
				<TextInput style={styles.text} onChangeText={(t) => setAmountCharged(t)} placeholder="amountCharged" value={amountCharged} />

				{/* <View > */}
				<Text>Cliente</Text>
					<FlatList
						data={customers}
						renderItem={renderCustomer}
						keyExtractor={item => item.id}
						style={{height: '30%', borderWidth:1, marginBottom: 10}}
					/>
				<Text>Salão</Text>
					<FlatList
						data={salons}
						renderItem={renderSalon}
						keyExtractor={item => item.id}
						style={{height: '30%', borderWidth:1, marginBottom: 10}}
					/>
				<Text>Procedimento</Text>
					<FlatList
						data={procedures}
						renderItem={renderProcedures}
						keyExtractor={item => item.id}
						style={{height: '30%', borderWidth:1, marginBottom: 10}}
					/>
				{/* </View>) */}

				<Text>Dados selecionados:</Text>
				<Text>Cliente: {customer?.name}</Text>
				<Text>Salão: {salon?.name}</Text>
				<Text>Procedimento: {procedure?.description}</Text>
				

				<TouchableOpacity style={styles.button} onPress={handleAction}>
					<Text>{operation === 'insert' ? 'Criar' : 'Salvar AltArações'}</Text>
				</TouchableOpacity>
			</ScrollView>

		</SafeAreaView>)
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
	button: {
		width: '90%',
		height: 40,
		backgroundColor: 'gray',

		alignItems: 'center',
		justifyContent: 'center'
	},
});
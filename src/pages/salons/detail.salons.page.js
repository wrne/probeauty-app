import React, { useState } from 'react'
import {ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {  } from 'react-native-gesture-handler'

export default function DetailSalon({ route, navigation }) {


	const { salon, operation, buttonAction } = route.params;
	console.log('DetailSalon:',salon?.description);

	const [name, setName] = useState(!!salon?.name ? salon.name : '')
	const [address, setAddress] = useState(!!salon?.address ? salon.address : '')
	const [commission, setCommission] = useState(!!salon?.commission ? salon.commission : '')
	const [paymentDay, setPaymentDay] = useState(!!salon?.paymentDay ? salon.paymentDay : '')
	const [salonPays, setSalonPays] = useState(!!salon?.salonPays ? salon.salonPays : '')

	async function handleAction() {


		const editSalon = {
			...salon,
			name,
			address,
			commission,
			paymentDay,
			salonPays
		}
		
		// executa método de edição do procediento
		await buttonAction(editSalon)


		// rediciona para 'All Salons'
		navigation.navigate('salons', { screen: 'all.salons' });

	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} >
				<TextInput style={styles.text} onChangeText={(t)=>setName(t)} placeholder="Name" value={name}/>
				<TextInput style={styles.text} onChangeText={(t)=>setAddress(t)} placeholder="Address" value={address}/>
				<TextInput style={styles.text} onChangeText={(t)=>setCommission(t)} placeholder="Commission" value={commission}/>
				<TextInput style={styles.text} onChangeText={(t)=>setPaymentDay(t)} placeholder="PaymentDay" value={paymentDay}/>
				<TextInput style={styles.text} onChangeText={(t)=>setSalonPays(t)} placeholder="SalonPays" value={salonPays}/>
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
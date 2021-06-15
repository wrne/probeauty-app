import React, { useState } from 'react'
import { ScrollView, StatusBar, SafeAreaView, StyleSheet, View } from 'react-native'

// import {  } from 'react-native-gesture-handler'
import { Container, Box } from '../../components/container';
import { Input, Text, ActionButton } from '../../components/basics';

export default function DetailSalon({ route, navigation }) {


	const { salon, operation, buttonAction } = route.params;
	console.log('DetailSalon:', salon?.description);

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
		<Container center>
			<ScrollView style={styles.scrollView} >
				<Box>
					
					{operation !== 'insert' && <Text tiny>Nome</Text>}
					<Input style={styles.text} onChangeText={(t) => setName(t)} placeholder="Name" value={name} />

					{operation !== 'insert' && <Text tiny>Endereço</Text>}
					<Input style={styles.text} onChangeText={(t) => setAddress(t)} placeholder="Address" value={address} />
					
					{operation !== 'insert' && <Text tiny>Comissão</Text>}
					<Input style={styles.text} onChangeText={(t) => setCommission(t)} placeholder="Commission" value={commission} />
					
					{operation !== 'insert' && <Text tiny>Dia do Pagamento</Text>}
					<Input style={styles.text} onChangeText={(t) => setPaymentDay(t)} placeholder="PaymentDay" value={paymentDay} />
					
					{operation !== 'insert' && <Text tiny>Salon que paga?</Text>}
					<Input style={styles.text} onChangeText={(t) => setSalonPays(t)} placeholder="SalonPays" value={salonPays} />

				</Box>
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
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
	},
	scrollView: {
		width: '92%',
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
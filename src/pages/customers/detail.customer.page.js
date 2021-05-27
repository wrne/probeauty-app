import React, { useState } from 'react'
import {ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {  } from 'react-native-gesture-handler'

export default function DetailCustomer({ route, navigation }) {


	const { customer, operation, buttonAction } = route.params;

	const [name, setName] = useState(!!customer?.name ? customer.name : '')
	const [birth, setBirth] = useState(!!customer?.birth ? customer.birth : '')
	const [phone, setPhone] = useState(!!customer?.phone ? customer.phone : '')
	const [email, setEmail] = useState(!!customer?.email ? customer.email : '')
	const [discount, setDiscount] = useState(!!customer?.discount ? customer.discount : '')
	const [canUsePhoto, setCanUsePhoto] = useState(!!customer?.canUsePhoto ? customer.canUsePhoto : '')
	const [anamnese, setAnamnese] = useState(!!customer?.anamnese ? customer.anamnese : '')
	const [mappingType, setMappingType] = useState(!!customer?.mappingType ? customer.mappingType : '')
	const [mapping, setMapping] = useState(!!customer?.mapping ? customer.mapping : '')
	const [thickness, setThickness] = useState(!!customer?.thickness ? customer.thickness : '')
	const [curvature, setCurvature] = useState(!!customer?.curvature ? customer.curvature : '')
	
	async function handleAction() {


		const editCustomer = {
			...customer,
			name,
			birth,
			phone,
			email,
			discount,
			canUsePhoto,
			anamnese,
			mappingType,
			mapping,
			thickness,
			curvature
		}
		
		// executa método de edição do procediento
		await buttonAction(editCustomer)


		// rediciona para 'All Customers'
		navigation.navigate('customers', { screen: 'all.customers' });

	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} >

				<TextInput style={styles.text} onChangeText={(t)=>setName(t)} placeholder="Name" value={name}/>
				<TextInput style={styles.text} onChangeText={(t)=>setBirth(t)} placeholder="Birth" value={birth}/>
				<TextInput style={styles.text} onChangeText={(t)=>setPhone(t)} placeholder="Phone" value={phone}/>
				<TextInput style={styles.text} onChangeText={(t)=>setEmail(t)} placeholder="Email" value={email}/>
				<TextInput style={styles.text} onChangeText={(t)=>setDiscount(t)} placeholder="Discount" value={discount}/>
				<TextInput style={styles.text} onChangeText={(t)=>setCanUsePhoto(t)} placeholder="CanUsePhoto" value={canUsePhoto}/>
				<TextInput style={styles.text} onChangeText={(t)=>setAnamnese(t)} placeholder="Anamnese" value={anamnese}/>
				<TextInput style={styles.text} onChangeText={(t)=>setMappingType(t)} placeholder="MappingType" value={mappingType}/>
				<TextInput style={styles.text} onChangeText={(t)=>setMapping(t)} placeholder="Mapping" value={mapping}/>
				<TextInput style={styles.text} onChangeText={(t)=>setThickness(t)} placeholder="Thickness" value={thickness}/>
				<TextInput style={styles.text} onChangeText={(t)=>setCurvature(t)} placeholder="Curvature" value={curvature}/>

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
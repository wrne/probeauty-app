import React, { useState } from 'react'
import { ScrollView, StatusBar, SafeAreaView, StyleSheet,View, Switch } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {  } from 'react-native-gesture-handler'
import { Input, Text, ActionButton } from '../../components/basics';

export default function DetailCustomer({ route, navigation }) {


	const { customer, operation, buttonAction } = route.params;

	const [name, setName] = useState(!!customer?.name ? customer.name : '')
	const [birth, setBirth] = useState(!!customer?.birth ? customer.birth : '')
	const [phone, setPhone] = useState(!!customer?.phone ? customer.phone : '')
	const [email, setEmail] = useState(!!customer?.email ? customer.email : '')
	const [discount, setDiscount] = useState(!!customer?.discount ? customer.discount : '')
	const [canUsePhoto, setCanUsePhoto] = useState(!!customer?.canUsePhoto ? customer.canUsePhoto : true)
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

				{/* <TextInput style={styles.text} onChangeText={(t)=>setName(t)} placeholder="Name" value={name}/> */}
				<Text bold margin={"10px 0px"}>Dados Pessoais</Text>
				<Input onChangeText={(t) => setName(t)} placeholder="Name" value={name} />
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<Input style={{ width: '40%' }} onChangeText={(t) => setBirth(t)} placeholder="Birth" value={birth} />
					<Input style={{ width: '55%' }} onChangeText={(t) => setPhone(t)} placeholder="Phone" value={phone} />
				</View>
				<Input onChangeText={(t) => setEmail(t)} placeholder="Email" value={email} />
				<Text bold>Dados Comerciais</Text>
				<Input style={{ width: '50%' }} onChangeText={(t) => setDiscount(t)} placeholder="Discount" value={discount} />
				{/* <Input onChangeText={(t)=>setCanUsePhoto(t)} placeholder="CanUsePhoto" value={canUsePhoto}/> */}
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<Text>Pode usar a foto?</Text>
					<Switch onValueChange={(newValue) => setCanUsePhoto(newValue)} value={canUsePhoto} />
				</View>
				<Text bold>Cílios</Text>
				<Input onChangeText={(t) => setMappingType(t)} placeholder="MappingType" value={mappingType} />
				<Input onChangeText={(t) => setMapping(t)} placeholder="Mapping" value={mapping} />
				<Input onChangeText={(t) => setThickness(t)} placeholder="Thickness" value={thickness} />
				<Input onChangeText={(t) => setCurvature(t)} placeholder="Curvature" value={curvature} />

				<View style={{ alignItems: 'center' }}>

					<ActionButton onPress={handleAction}>
						<Text>{operation === 'insert' ? 'Criar' : 'Salvar AltArações'}</Text>
					</ActionButton>
				</View>
			</ScrollView>

		</SafeAreaView>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
	},
	scrollView: {
		margin: 10,
	},
	text: {
		fontSize: 12,
	},
});
import React, { useState } from 'react'
import { ScrollView, StatusBar, SafeAreaView, StyleSheet, View, Switch } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {  } from 'react-native-gesture-handler'
import { Container, Box } from '../../components/container';
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
	const [thickness, setThickness] = useState(!!customer?.thickness ? customer.thickness : '')
	const [curvature, setCurvature] = useState(!!customer?.curvature ? customer.curvature : '')
	const [mapping1, setMapping1] = useState(!!customer?.mapping1 ? customer.mapping1 : '')
	const [mapping2, setMapping2] = useState(!!customer?.mapping2 ? customer.mapping2 : '')
	const [mapping3, setMapping3] = useState(!!customer?.mapping3 ? customer.mapping3 : '')
	const [mapping4, setMapping4] = useState(!!customer?.mapping4 ? customer.mapping4 : '')
	const [mapping5, setMapping5] = useState(!!customer?.mapping5 ? customer.mapping5 : '')
	const [mapping6, setMapping6] = useState(!!customer?.mapping6 ? customer.mapping6 : '')
	const [mapping7, setMapping7] = useState(!!customer?.mapping7 ? customer.mapping7 : '')
	const [mapping8, setMapping8] = useState(!!customer?.mapping8 ? customer.mapping8 : '')

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
			mapping: mapping1 + mapping2 + mapping3 + mapping4 + mapping5 + mapping6 + mapping7 + mapping8,
			thickness,
			curvature
		}

		// executa método de edição do procediento
		await buttonAction(editCustomer)


		// rediciona para 'All Customers'
		navigation.navigate('customers', { screen: 'all.customers' });

	}

	return (
		// <SafeAreaView style={styles.container}>
		<Container center >
			<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >

				{/* <TextInput style={styles.text} onChangeText={(t)=>setName(t)} placeholder="Name" value={name}/> */}
				<Box>

					<Text bold margin={"10px 0px"}>Dados Pessoais</Text>
					{operation !== 'insert' && <Text tiny>Nome</Text>}
					<Input onChangeText={(t) => setName(t)} placeholder="Nome" value={name} />
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width:'100%' }}>
						<View style={{ width: '40%' }}>
							{operation !== 'insert' && <Text tiny>Nascimento</Text>}
							<Input onChangeText={(t) => setBirth(t)} placeholder="Nascimento" value={birth} />
						</View>
						<View style={{ width: '55%' }}>
							{operation !== 'insert' && <Text tiny>Telefone</Text>}
							<Input onChangeText={(t) => setPhone(t)} placeholder="Telefone" value={phone} />
						</View>
					</View>
					{operation !== 'insert' && <Text tiny>Email</Text>}
					<Input onChangeText={(t) => setEmail(t)} placeholder="Email" value={email} />

				</Box>
				<Box>

					<Text bold margin={"10px 0px"}>Dados Comerciais</Text>
					{operation !== 'insert' && <Text tiny>% Desconto</Text>}
					<Input style={{ width: '50%' }} onChangeText={(t) => setDiscount(t)} placeholder="Desconto" value={discount} />
					{/* <Input onChangeText={(t)=>setCanUsePhoto(t)} placeholder="CanUsePhoto" value={canUsePhoto}/> */}
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width:'100%' }}>
						<Text>Pode usar a foto?</Text>
						<Switch onValueChange={(newValue) => setCanUsePhoto(newValue)} value={canUsePhoto} />
					</View>
				</Box>
				<Box>

					<Text bold margin={"10px 0px"}>Cílios</Text>
					{operation !== 'insert' && <Text tiny>Tipo Mapping</Text>}
					<Input onChangeText={(t) => setMappingType(t)} placeholder="Mapping" value={mappingType} />

					{operation !== 'insert' && <Text tiny>Mapping</Text>}
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width:'100%'  }}>
						<Input center onChangeText={(t) => setMapping1(t)} placeholder="1" value={mapping1} maxLength={1} width={'35px'} />
						<Input center onChangeText={(t) => setMapping2(t)} placeholder="2" value={mapping2} maxLength={1} width={'35px'} />
						<Input center onChangeText={(t) => setMapping3(t)} placeholder="3" value={mapping3} maxLength={1} width={'35px'} />
						<Input center onChangeText={(t) => setMapping4(t)} placeholder="4" value={mapping4} maxLength={1} width={'35px'} />
						<Input center onChangeText={(t) => setMapping5(t)} placeholder="5" value={mapping5} maxLength={1} width={'35px'} />
						<Input center onChangeText={(t) => setMapping6(t)} placeholder="6" value={mapping6} maxLength={1} width={'35px'} />
						<Input center onChangeText={(t) => setMapping7(t)} placeholder="7" value={mapping7} maxLength={1} width={'35px'} />
						<Input center onChangeText={(t) => setMapping8(t)} placeholder="8" value={mapping8} maxLength={1} width={'35px'} />
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width:'100%'  }}>
						<View style={{ width: '45%' }}>

							{operation !== 'insert' && <Text tiny>Espessura</Text>}
							<Input onChangeText={(t) => setThickness(t)} placeholder="Espessura" value={thickness} />
						</View>
						<View style={{ width: '45%' }}>

							{operation !== 'insert' && <Text tiny>Curvatura</Text>}
							<Input onChangeText={(t) => setCurvature(t)} placeholder="Curvatura" value={curvature} />
						</View>
					</View>
				</Box>

				<View style={{ alignItems: 'center' }}>

					<ActionButton onPress={handleAction}>
						<Text large>{operation === 'insert' ? 'Criar' : 'Salvar Alterações'}</Text>
					</ActionButton>
				</View>
			</ScrollView>

		</Container>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: StatusBar.currentHeight,
	},
	scrollView: {
		width: '92%',
	},
	text: {
		fontSize: 12,
	},
});
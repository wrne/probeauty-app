import React from 'react'
import { Text,View, SafeAreaView,Image, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import ListItens from '../../components/listItens'
import Header from '../../components/header'

import { useSalon } from '../../contexts/salons.context'

import Icon from 'react-native-vector-icons/MaterialIcons'
import logo from '../../../assets/002-hair-salon.png'
import {colors, metrics} from '../../styles'

export default function Salons({ navigation }) {
	const { salons, loading, exists, createSalon, updateSalon, deleteSalon } = useSalon();

	
	function goToNewSalonPage() {

		navigation.navigate('new.salon', {
			operation: 'insert',
			buttonAction: createSalon
		})
	};

	function NewSalonButton() {
		return (
			<TouchableOpacity onPress={goToNewSalonPage}>
				<Text>Cadastre um Salão ;)</Text>
			</TouchableOpacity>
		)
	};

	if (loading) {
		return (
			<SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text>Carregando...</Text>
			</SafeAreaView>
		)
	};

	if (exists) {

		//Definindo lista compatível com o comp. ListItens
		const listSalons = salons.map((item) => {
			return {
				title: item.name,
				content: item.address,
				salon: item
			}
		})

		//Definindo ações
		function actionPress(item) {


			navigation.navigate('detail.salon', {
				operation: 'update',
				buttonAction: updateSalon,
				salon: item.salon
			})

			// Alert.alert('Procedimento', `Procedimento: ${item.Salon.description}\nValor: ${item.Salon.value}`)
		};

		function actionMenu(item) {
			deleteSalon(item.salon.id)
		};

		return (
			<SafeAreaView style={styles.container}>

				<Header/>
				<View style={{ width: '100%', height: '40%', alignItems: 'center' }}>
					<Image source={logo} style={styles.img} />
				</View>

				<View style={styles.containerList}>

					<View style={styles.headerList}>

						<Text style={styles.title}>Salões</Text>

						<TouchableOpacity onPress={goToNewSalonPage}>
							<Icon name="add" size={32} color={colors.iconDark} />
						</TouchableOpacity>
					</View>

					<ListItens content={listSalons} actionPressItem={actionPress} actionMenuItem={actionMenu} icon="delete" />
				</View>
				{/* <View style={{ height: '8%', alignItems: 'center', margin: 10 }}>
					<NewCustomerButton />
				</View> */}
			</SafeAreaView>
		)
	} else {

		return (
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<NewSalonButton />
			</SafeAreaView>

		)
	};
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.title,
		// marginBottom: 10
		paddingBottom: 10,


	},
	img: {
		height: '100%',
		resizeMode: 'contain'
	},
	containerList: {
		backgroundColor: colors.boxBackground,
		height: '45%',
		margin: 10,
		padding: 10,

		borderRadius: metrics.borderRadius
	},
	headerList: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 5,
		borderBottomWidth: 1,
		borderColor: '#888'
	},

	button: {
		backgroundColor: colors.actionButton,
		height: '100%',
		width: '70%',
		alignItems: 'center',
		justifyContent: 'center',

		borderRadius: metrics.borderRadius
	}

})

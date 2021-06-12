import React from 'react'
import { Text,View, SafeAreaView,Image, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import ListItens from '../../components/listItens'

import { Container,ContainerList, Header } from '../../components/container'

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
			<Container>

				<Header/>

				<View style={{ width: '100%', height: '30%', alignItems: 'center' }}>
					<Image source={logo} style={styles.img} />
				</View>

				<ContainerList  height='55%' listTitle="Salões" onPress={goToNewSalonPage}>
					<ListItens content={listSalons} actionPressItem={actionPress} actionMenuItem={actionMenu} icon="delete" />
				</ContainerList>
			</Container>
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


	img: {
		height: '100%',
		resizeMode: 'contain'
	},

})

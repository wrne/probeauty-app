import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, metrics } from '../../styles'

function Card({ title, value, unity }) {
	return (
		<View  style={styles.containerCard}>
			<View style={{flexDirection: 'row'}}>

			<Text style={styles.textValueCard}>{value}</Text>
			{!!unity && <Text style={styles.textUnityCard}>{unity}</Text>}
			</View>
			<Text style={styles.textTitleCard}>{title}</Text>
		</View>
	)
}

export default function FinancesPage() {

	const userName = 'Fulana'
	// Usar o UseEffect para carregar os dados do usuário
	// 

	return (
		<SafeAreaView style={styles.background}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor={colors.background}
			/>
			<View style={styles.container}>


				<View style={styles.containerHeader}>
					<Text style={styles.textHello}>Olá</Text>
					<Text style={styles.textName}>{userName}!</Text>
				</View>

				<View style={styles.containerCards}>
					<Card title="Atendimentos" value="110" />
					<Card title="Clientes" value="50" />
					<Card title="A Receber" value="522,00" unity="BRL" />
					<Card title="A Pagar" value="130,00" unity="BRL" />
				</View>

				<Text>O que deseja fazer?</Text>
				<View style={styles.containerButtons}>
					<TouchableOpacity style={styles.button}>
						<Icon name="person" size={48} color="#FFFFFF"></Icon>
						<Text style={styles.textButton}>Nova Cliente</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Icon name="brush" size={48} color="#FFFFFF"></Icon>
						<Text style={styles.textButton}>Novo Atendimento</Text>
					</TouchableOpacity>
				</View>

			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	background: {
		height: '100%',
		backgroundColor: colors.background
	},
	container: {
		margin: 7,
		padding: 10,
		height: '96%', // Corrigir condiderando 100% menos altura da TabBar
		borderRadius: metrics.borderRadius,
		justifyContent: 'space-around',
		backgroundColor: colors.boxBackground,
	},
	textHello:{
		fontSize: 22,
	},
	textName:{
		fontSize: 32,
		fontWeight: 'bold'
	},
	containerCards:{
		height: '45%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		// borderWidth: 1,
	},
	containerCard:{
		width: '44%',
		height: '35%',
		margin: 10,
		padding: 10,
		borderWidth: 1,		
		borderRadius: metrics.borderRadius,
		shadowColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textValueCard:{
		color: 'red',
		fontSize: 30,
		fontWeight: 'bold'
	},
	textUnityCard:{},
	textTitleCard:{
		fontSize: 16

	},
	containerButtons:{
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	button:{
		width: 100,
		height: 100,
		backgroundColor: 'gray',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textButton:{
		fontSize: 12,
		color: '#FFFFFF'
	}
})

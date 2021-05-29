import React from 'react'
import { ScrollView, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/005-beleza.png'
import { colors, metrics } from '../styles'
import { useAuth } from '../contexts/user.context'

function Card({ children, icon, size, color, text }) {
	return (
		<View style={styles.cardContainer}>
			<TouchableOpacity style={styles.button}>
				<Icon name={icon} size={size} color={color}></Icon>
				<Text style={styles.textButton}>{text}</Text>
			</TouchableOpacity>
		</View>
	)
}
export default function HomePage() {
	const { user } = useAuth()

	return (

		<SafeAreaView style={styles.background}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor={colors.background}
			/>
			<View style={styles.container}>


				<View style={styles.containerHeader}>
					<Text style={styles.textHello}>Olá</Text>
					<Text style={styles.textName}>{user.name}!</Text>
				</View>

				<View style={{ width: '100%', height: '25%', alignItems: 'center' }}>
					<Image source={logo} style={styles.img} />
				</View>
				<Text>O que deseja fazer?</Text>


				<View style={styles.containerButtons}>

					<ScrollView horizontal={true} style={{ height: '30%', width: '100%' }} >

						<Card icon="brush" size={48} color="#999" text="Novo Atendimento" />
						<Card icon="person" size={48} color="#999" text="Nova Cliente" />
						<Card icon="money" size={48} color="#999" text="Finanças" />
						
					</ScrollView>
				</View>

			</View>
		</SafeAreaView >
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
		// backgroundColor: colors.boxBackground,
	},
	img: {
		height: '100%',
		resizeMode: 'contain'
	},
	cardContainer: {
		width: '50%',
		height: '85%',
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		// marginBottom: 20,

		borderRadius: metrics.borderRadius,
		borderColor: '#d2d2d2',
		elevation: 10,
		// borderWidth: 10,
		// shadowOffset: {
		// 	width: 10,
		// 	height: 10
		// }


	},
	textHello: {
		fontSize: 22,
	},
	textName: {
		fontSize: 32,
		fontWeight: 'bold'
	},
	containerButtons: {

		height: '35%',
		width: '100%'
		// alignItems: 'center',
		// justifyContent: 'space-around',
		// marginBottom: 30,
	},
	button: {
		// backgroundColor: 'gray',
		width: '100%',
		height: '100%',
		// marginTop: 30,
		// borderRadius: 80,
		alignItems: 'center',
		justifyContent: 'center'


	},
	textButton: {
		fontSize: 12,
		color: '#555'
	}
})

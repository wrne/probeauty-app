import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, metrics } from '../styles'

export default function HomePage(){
	const userName = 'Fulana'
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

				<Text>O que deseja fazer?</Text>
				<View style={styles.containerButtons}>
					<TouchableOpacity style={[styles.button,{width: 120,height: 120}]}>
						<Icon name="brush" size={48} color="#FFFFFF"></Icon>
						<Text style={styles.textButton}>Novo Atendimento</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button,{width: 100,height: 100}]}>
						<Icon name="person" size={48} color="#FFFFFF"></Icon>
						<Text style={styles.textButton}>Nova Cliente</Text>
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
		// backgroundColor: colors.boxBackground,
	},
	textHello:{
		fontSize: 22,
	},
	textName:{
		fontSize: 32,
		fontWeight: 'bold'
	},
	containerButtons:{
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 30,
	},
	button:{
		backgroundColor: 'gray',
		marginTop: 30,
		borderRadius: 80,
		alignItems: 'center',
		justifyContent: 'center'

	},
	textButton:{
		fontSize: 12,
		color: '#FFFFFF'
	}
})

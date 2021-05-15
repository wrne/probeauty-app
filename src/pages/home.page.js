import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Card({title,value, unity}){
	return(
		<View>
			<Text>{title}</Text>
			<Text>{value}</Text>
			<Text>{unity}</Text>
		</View>
	)
}

export default function HomePage() {

	const userName = 'Fulana'
	// Usar o UseEffect para carregar os dados do usuário
	// 

	return (
		<SafeAreaView>
			
			<View>
				<Text>Olá {userName}!</Text>
			</View>

			<View>
				<Card title="Clientes" value="50" unity=""/>
				<Card title="A Receber" value="522,00" unity="BRL"/>
				<Card title="A Pagar" value="130,00" unity="BRL"/>
				<Card title="Atendimentos" value="110" unity=""/>
			</View>

			<View>
				<TouchableOpacity>
					<Text>Novo Atendimento</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Nova Cliente</Text>
				</TouchableOpacity>
			</View>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({})

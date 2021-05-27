import React from 'react'
import {View, Text,SafeAreaView,TouchableOpacity} from 'react-native'

export default function Configurations({navigation}){

	function goProcedures(){
		
		// navigation.navigate('config', {
		// 	screen: 'procedures'
		//   });

		navigation.navigate('procedures');
	}

	function goSalons(){
		
		// navigation.navigate('config', {
		// 	screen: 'procedures'
		//   });

		navigation.navigate('salons');
	}

	function goCustomerServices(){
		
		// navigation.navigate('config', {
		// 	screen: 'procedures'
		//   });

		navigation.navigate('customerServices');
	}
	return (
		<SafeAreaView>
			<Text>Configurations page</Text>
			<TouchableOpacity onPress={goProcedures}>
				<Text>Go to Procedures Page</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={goSalons}>
				<Text>Go to Salons Page</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={goCustomerServices}>
				<Text>Go to Customer Services Page</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}
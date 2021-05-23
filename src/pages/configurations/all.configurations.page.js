import React from 'react'
import {View, Text,SafeAreaView,TouchableOpacity} from 'react-native'

export default function Configurations({navigation}){

	function goProcedures(){
		
		// navigation.navigate('config', {
		// 	screen: 'procedures'
		//   });

		navigation.navigate('procedures');
	}
	return (
		<SafeAreaView>
			<Text>Configurations page</Text>
			<TouchableOpacity onPress={goProcedures}>
				<Text>Go to Procedures Page</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}
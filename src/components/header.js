import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useAuth } from '../contexts/user.context'
import {colors, metrics} from '../styles'

export default function Header() {
	const {logOut} = useAuth();
	return (

		<View style={styles.header}>
			<Text style={styles.title}>ProBeaty</Text>
			<TouchableOpacity onPress={logOut}>
				<Icon name="logout" size={34} color={colors.iconDark} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	
	header: {
		// height: '5%',
		flexDirection: 'row',

		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 20,
		marginBottom: 20

	},
	title:{
		fontSize: metrics.header
	},
})

import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors} from '../styles'

export default function ListItens({content, actionLongPressItem, actionPressItem, actionMenuItem, icon="more-vert"}) {
	
	function renderItem({ item}) {

		return (
			<View style={styles.itemContainer} >
				<TouchableOpacity
					onPress={() => { actionPressItem(item) }}
					onLongPress={() => { actionLongPressItem(item) }}
					style={styles.textArea} >
					<View>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.content}>{item.content}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.itemMenu}
					onPress={()=>{actionMenuItem(item)}}>
					<Icon name={icon} size={24} color={colors.iconLight}/>
				</TouchableOpacity>
			</View>
		)
	}


	return (
		<View style={styles.container}>
			<FlatList
				data={content}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</View>)
}



const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex:1,
	},
	itemContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FFF',
		marginTop: 2,
		padding: 10,
		// borderBottomWidth: 0.5,
		// elevation: 5,
	},
	itemMenu:{
		width: '5%'
	},
	textArea: {
		flex: 1,
	},
	buttonsArea: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		// flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.subtitle,
	},
	content: {
		fontSize: 14,
		color: 'darkslategray',
	},
});
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Box } from '../../components/container'
import { Text } from '../../components/basics'
import styled from 'styled-components/native'
import { colors } from '../../styles'

import { useAuth } from '../../contexts/user.context'

// import * as Print from 'expo-print';

export default function Configurations({ navigation }) {

	const { logOut } = useAuth();

	function goProcedures() {

		// navigation.navigate('config', {
		// 	screen: 'procedures'
		//   });

		navigation.navigate('procedures');
	}

	function goSalons() {

		// navigation.navigate('config', {
		// 	screen: 'procedures'
		//   });

		navigation.navigate('salons');
	}

	function goCustomerServices() {

		// navigation.navigate('config', {
		// 	screen: 'procedures'
		//   });

		navigation.navigate('customerServices');
	}
	
	function goSignature() {

		// navigation.navigate('config', {
		// 	screen: 'procedures'
		//   });

		navigation.navigate('signature');
	}

	return (
		<Container style={{ backgroundColor: colors.background }}>

			<View style={{ flexDirection: 'row', alignItems: 'center' }}>

				<TouchableOpacity onPress={() => { navigation.goBack() }}>
					<Icon name="chevron-left" size={34} color={colors.iconDark} />
				</TouchableOpacity>
				<Text title bold dark margin="30px 10px">Configurações</Text>
			</View>

			<Box style={{ backgroundColor: colors.boxBackground }}>
				<Item description="Procedimentos" firstIcon="square-foot" onPress={goProcedures} />
				<Item description="Salões" firstIcon="store" onPress={goSalons} />
				<Item description="Atendimentos" firstIcon="brush" onPress={goCustomerServices} />
				<Item description="Assinatura" firstIcon="article" onPress={goSignature} />
			</Box>

			<Box style={{ backgroundColor: colors.boxBackground }}>
				<Button onPress={logOut}>
					<Text large bold>Logout</Text>
					<Icon name="logout" size={34} color={colors.iconDark} />
				</Button>
			</Box>

		</Container>
	)
}

function Item({ onPress, description, firstIcon }) {
	return (
		<ContainerItem>
			<Button onPress={onPress}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon name={firstIcon} size={24} color={colors.iconDark} style={{ marginRight: 8 }} />
					<Text large bold dark>{description}</Text>
				</View>
				<Icon name="chevron-right" size={34} color={colors.iconDark} />
			</Button>
		</ContainerItem>
	);
}

const ContainerItem = styled.View`
	width: 100%;
	align-items: center;

`;

const Button = styled.TouchableOpacity`
	width: 100%;
	/* height: 7%; */
	background-color: ${colors.boxBackground};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	/* margin: 5px 10px; */
	padding: 10px;
	border-radius: 7px;
`;

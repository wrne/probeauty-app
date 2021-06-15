import React from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { colors, metrics } from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Text } from '../components/basics'
import { useAuth } from '../contexts/user.context'
import { useNavigation, useRoute } from '@react-navigation/native';


export const StyledContainer = styled.SafeAreaView`

	height: 100%;
	width: 100%;
	background-color: ${(props) => props.color ?? colors.boxBackground};
	padding: ${(props) => props.padding ?? 0};
	margin: ${(props) => props.margin ?? 0};
	/* paddingTop: StatusBar.currentHeight, */
	
	${({ row, rowReverse }) => {
		switch (true) {
			case row:
				return `flex-direction: row;`
			case rowReverse:
				return `flex-direction: row-reverse;`
			default:
				return `flex-direction: column;`
		}
	}}

	${({ spaceBetween, spaceAround, justifyCenter }) => {
		switch (true) {
			case spaceBetween:
				return `justify-content: space-between ;`
			case spaceAround:
				return `justify-content: space-around ;`
			case justifyCenter:
				return `justify-content: center ;`
			default:
				return `justify-content: flex-start ;`
		}
	}}

	${({ center }) => {
		switch (true) {
			case center:
				return `align-items: center ;`
			default:
				return `align-items: flex-start ;`
		}
	}}

`;

export function Container({ ...props }) {
	return (
		<StyledContainer {...props}>
			<StatusBar
				barStyle={colors.statusBarStyle}
				backgroundColor={colors.boxBackground}
			/>
			{props.children}
		</StyledContainer>
	);
};


const ContainerHeader = styled.View`
	/* width: 100%; */
	background-color: ${colors.boxBackground};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${(props) => props.padding ?? `10px 0px`};
	margin: ${(props) => props.margin ?? `10px`};

	border-bottom-width: .5px;
`;


export function Header() {
	const { logOut } = useAuth();
	const navigation = useNavigation()
	const route = useRoute();

	function goToMenu() {
		console.log('Route:', route);
		navigation.navigate('config', { screen: 'configPage' });
	}

	return (
		<View style={{ width: '100%' }}>
			<ContainerHeader>
				<View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

					{route.name !== 'home' &&
						<TouchableOpacity onPress={() => { navigation.goBack() }}>
							<Icon name="chevron-left" size={34} color={colors.iconDark} />
						</TouchableOpacity>
					}

					<Text large heavy margin={'0px 5px'}>ProBeaty</Text>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

					<TouchableOpacity style={{ marginRight: 10 }} onPress={goToMenu}>
						<Icon name="menu" size={34} color={colors.iconDark} />
					</TouchableOpacity>
					{/* <TouchableOpacity onPress={logOut}>
						<Icon name="logout" size={34} color={colors.iconDark} />
					</TouchableOpacity> */}
				</View>
			</ContainerHeader>
		</View>
	)
}

const StyledBox = styled.View`
	background-color: ${colors.background};
	width: ${(props) => props.width ?? `95%`};
	${(props) => props.height && `height: ${props.height};`}

	margin: ${(props) => props.margin ?? `5px`};
	padding: ${(props) => props.padding ?? '10px'};

	border-radius: ${(props) => props.borderRadius ?? metrics.borderRadius};

	${({ row, rowReverse }) => {
		switch (true) {
			case row:
				return `flex-direction: row;`
			case rowReverse:
				return `flex-direction: row-reverse;`
			default:
				return `flex-direction: column;`
		}
	}}

	${({ spaceBetween, spaceAround, justifyCenter }) => {
		switch (true) {
			case spaceBetween:
				return `justify-content: space-between ;`
			case spaceAround:
				return `justify-content: space-around ;`
			case justifyCenter:
				return `justify-content: center ;`
			default:
				return `justify-content: flex-start ;`
		}
	}}

	${({ center }) => {
		switch (true) {
			case center:
				return `align-items: center ;`
			default:
				return `align-items: flex-start ;`
		}
	}}
`;

export function Box({ ...props }) {
	return (
		<StyledBox {...props}>
			{!!props.title && <Text large bold dark padding="10px">{props.title}</Text>}
			{props.children}
		</StyledBox>
	);
}

const StyledHeaderList = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	padding: 0 10px 5px;
	border-bottom-width: .5px;
`;

export function ContainerList({ ...props }) {
	return (
		<Box {...props}>
			<StyledHeaderList>
				<Text title bold dark>{props.listTitle}</Text>
				<TouchableOpacity onPress={props.onPress}>
					<Icon name="add" size={32} color={colors.iconDark} />
				</TouchableOpacity>
			</StyledHeaderList>
			{props.children}
		</Box>
	);
}
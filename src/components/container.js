import React from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { colors, metrics } from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Text } from '../components/basics'
import { useAuth } from '../contexts/user.context'


export const StyledContainer = styled.SafeAreaView`
	height: 100%;
	background-color: ${colors.boxBackground};
`;

export function Container({ ...props }) {
	return (
		<StyledContainer>
			<StatusBar
				barStyle={colors.statusBarStyle}
				backgroundColor={colors.boxBackground}
			/>
			{props.children}
		</StyledContainer>
	);
};


const ContainerHeader = styled.View`
	background-color: ${colors.boxBackground};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-left:10;
	margin-right:10;
	padding-top: 10;
	padding-bottom: 10;

	border-bottom-width: .5;
`;


export function Header() {
	const { logOut } = useAuth();
	return (

		<ContainerHeader>
			<Text large heavy>ProBeaty</Text>
			<View style={{ flexDirection: 'row', width: '22%', justifyContent: 'space-between' }}>

				<TouchableOpacity onPress={logOut}>
					<Icon name="settings" size={34} color={colors.iconDark} />
				</TouchableOpacity>
				<TouchableOpacity onPress={logOut}>
					<Icon name="logout" size={34} color={colors.iconDark} />
				</TouchableOpacity>
			</View>
		</ContainerHeader>
	)
}

const StyledContainerList = styled.View`
	background-color: ${colors.background};
	height: 55%;
	margin: ${(props) => props.margin ?? '10px'};
	padding: ${(props) => props.padding ?? '5px'};
	border-radius: ${metrics.borderRadius};	
`;

const StyledHeaderList = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0 10px;
	padding: 0 0px 5px;
	border-bottom-width: .5;
`;

export function ContainerList({ ...props }) {
	return (
		<StyledContainerList {...props}>
			<StyledHeaderList>
				<Text title bold dark>{props.title}</Text>
				<TouchableOpacity onPress={props.onPress}>
					<Icon name="add" size={32} color={colors.iconDark} />
				</TouchableOpacity>
			</StyledHeaderList>
			{props.children}
		</StyledContainerList>
	);

}
import React from 'react';
import {StatusBar} from 'react-native';
import styled from "styled-components/native";
import { metrics } from '../styles';


export const StyledText = styled.Text`
	
	margin: ${(props) => props.margin ?? 0};
	padding: ${(props) => props.padding ?? 0};
	color: ${(props) => props.color ?? "#000"};

	${({ light, dark }) => {
		switch (true) {
			case light:
				return `color: #D2D2D2`;
			case dark:
				return `color: #333`;
		}
	}}

	${({ thin, bold, heavy, black }) => {
		switch (true) {
			case thin:
				return `font-family: "Montserrat-Light"`;
			case bold:
				return `font-family: "Montserrat-SemiBold"`;
			case heavy:
				return `font-family: "Montserrat-Bold"`;
			case black:
				return `font-family: "Montserrat-Black"`;
			default:
				return `font-family: "Montserrat-Regular"`
		}
	}}

	${({ title, large, medium, small, tiny }) => {

		switch (true) {
			case title:
				return `font-size: 32px`;
			case large:
				return `font-size: 18px`;
			case medium:
				return `font-size: 15px`;
			case small:
				return `font-size: 12px`;
			case tiny:
				return `font-size: 10px`;
			default:
				return `font-size: 13px`;
		}
	}}

	${({ center, right }) => {
		switch (true) {
			case center:
				return `text-align: center`;
			case right:
				return `text-align: right`;
			default:
				return `text-align: left`;
		}
	}}

`;

export function Text({ ...props }) {
	return (
		<StyledText {...props}>{props.children}</StyledText>
	)
}

export const Input = styled.TextInput`
	background-color: #FFF;
	width: 100%;
	color: ${(props) => props.color ?? "#333"};
	font-size: ${(props) => props.fontsize ?? `12px`};
	font-family: "Montserrat-Regular";
	border-width: ${(props) => props.borderWidth ?? "1px"};
	border-color: lightgray;
	border-radius: ${metrics.borderRadius}px;
	
	margin: ${(props) => props.margin ?? '0px 0px 5px 0px'};
	padding: ${(props) => props.padding ?? "10px"};
	
`;

export const ActionButton = styled.TouchableOpacity`
	background-color: ${(props) => props.color ?? "#93b8f0"};;
	width: ${(props) => props.width ?? `80%`};
	height: ${(props) => props.height ?? `40px`};
	border-radius: 20px;
	border-width: ${(props) => props.borderWidth ?? 0};
	
	margin: ${(props) => props.margin ?? '5px 0px'};
	padding: ${(props) => props.padding ?? "10px"};

	justify-content: center;
	align-items: center;
`;

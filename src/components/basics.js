import styled from "styled-components/native";
import { metrics } from '../styles';

export const Input = styled.TextInput`
	background-color: #FFF;
	width: 100%;
	color: #222;
	font-size: 14px;
	font-family: monospace;
	border-width: 1px;
	border-color: lightgray;
	border-radius: ${metrics.borderRadius}px;
	padding: 10px;
	margin-bottom: 5px;
`;

export const ActionButton = styled.TouchableOpacity`
	background-color: #93b8f0;
	width: 80%;
	border-radius: 20px;
	border-width: 0;
	
	justify-content: center;
	align-items: center;
`;
import React, { useState, useRef } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Box } from '../../components/container';
import { ActionButton, Text } from '../../components/basics';
import { colors } from '../../styles';

import Signature from 'react-native-signature-canvas';

const Sign = ({ text, setSign }) => {

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			// height: 250,
			// padding: 10,
		},
		row: {
			display: "flex",
			flexDirection: "row",
			justifyContent: 'space-between',
			width: '100%',
			alignItems: 'center',
		}
	});

	return (
		<View style={styles.container}>

			<View style={styles.row}>
				<TouchableOpacity
					title="Clear"
					onPress={handleClear}
				/>
				<TouchableOpacity
					title="Confirm"
					onPress={handleConfirm}
				/>
			</View>
		</View>
	);

}

export default function SignatureScreen() {

	const [sign, setSign] = useState(null);
	const ref = useRef();

	const handleSignature = signature => {
		setSign(signature);
	};

	const handleClear = () => {
		setSign(null);
		ref.current.clearSignature();
	}

	const handleConfirm = () => {
		
		ref.current.readSignature();
	}

	const style = `.m-signature-pad--footer {display: none; margin: 10px; }`;

	return (
		<Container center>
			<Header />
			<View style={{alignSelf: 'flex-start'}}>
				<Text large bold margin={'10px 10px 5px'}>Anamnese</Text>
				<Text medium margin={'0px 10px 20px'}>Sua assinatura:</Text>
			</View>
			<Box style={{ height: '50%' }}>
				{/* <Sign text="Sua assinatura" setSign={setSign}></Sign> */}
				<Signature
					ref={ref}
					onOK={handleSignature}
					webStyle={style}
				/>
			</Box>

			<ActionButton onPress={handleConfirm}  style={{marginTop: 30}}>
				<Text large>Confirma</Text>
			</ActionButton>

			<TouchableOpacity onPress={handleClear} style={{marginTop: 10}}>
				<Text>Limpar</Text>
			</TouchableOpacity>

			{sign ? (
				<Image
					resizeMode={"contain"}
					style={{ width: 335, height: 114 }}
					source={{ uri: sign }} />
			) : null}

		</Container >
	)
}
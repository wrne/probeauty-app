import React, {useEffect} from 'react';
import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuth } from '../../contexts/user.context';
import logo from '../../../assets/beleza.png';

// import { useMessages } from '../contexts/message.context';
import {colors, metrics}  from '../../styles';

export default function loginPage({ navigation }) {

	// Schema de validação dos campos do formulário
	const validationSchema = yup.object().shape({
		email: yup
			.string()
			.required('Preencha o email')
			.email('Digite um email válido'),
		password: yup
			.string()
			.required('Preencha a senha')
			.min(6, 'A senha deve ter pelo menos 6 dígitos')
	})

	const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });
	const { logIn } = useAuth();
	// const { message } = useMessages();

	useEffect(() => {
		console.log('Colors: ',colors);
		
	}, [])
	function submitForm({ email, password }) {

		logIn(email, password);

	}

	return (
		<View style={styles.background}>
			<StatusBar
				hidden
			/>
			<View style={styles.containerLogo}>
				<Image source={logo} style={styles.logo} ></Image>
			</View>
			<KeyboardAvoidingView style={styles.containerFields}>

				<View style={styles.containerInputText}>

					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput style={[styles.input, !!errors?.email ? { borderColor: colors.mainA, borderWidth: 2 } : null]}
								id="email"
								placeholder="Digite o Email"
								onChangeText={(t) => onChange(t)}
								value={value}
								keyboardType="email-address"
								returnKeyType={"next"}
								textContentType={"username"}
							/>
						)}
						name="email"
						defaultValue=""
					/>
					{!!errors?.email && <Text style={styles.msgError}>*{errors.email.message}</Text>}
				</View>
				<View style={styles.containerInputText}>

					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput style={[styles.input, !!errors?.password ? { borderColor: colors.mainA, borderWidth: 2 } : null]}
								id="password"
								placeholder="Digite a Senha"
								onChangeText={(t) => onChange(t)}
								value={value}
								returnKeyType={"send"}
								secureTextEntry={true}
								textContentType={"password"}
							/>
						)}
						name="password"
						defaultValue=""
					/>
					{!!errors.password && <Text style={styles.msgError}>*{errors.password.message}</Text>}

				</View>
				<TouchableOpacity style={styles.btnAcessar} onPress={handleSubmit(submitForm)}>
					<Text style={styles.textAcessar}>Acessar</Text>
				</TouchableOpacity>

				<View style={styles.links}>
					<TouchableOpacity style={styles.btnCadastrar} onPressIn={() => { navigation.navigate('create') }}>
						<Text style={styles.textCadastrar}>Cadastrar</Text>
					</TouchableOpacity>
				</View>

			</KeyboardAvoidingView>
		</View>
	)
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerLogo: {
		flex: 1,
		height: '40%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: '100%',
		resizeMode: 'contain'
	},
	containerFields: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%'
	},
	containerInputText: {
		height: '23%',
		width: '100%',
		padding: 5,
		alignItems: 'flex-end',
	},
	input: {
		backgroundColor: '#FFF',
		width: '100%',
		color: '#222',
		fontSize: 20,
		borderWidth: 1,
		borderColor: "lightgray",
		borderRadius: metrics.borderRadius,
		padding: 10
	},
	msgError: {
		paddingTop: 5,
		paddingRight: 5,
		color: 'red',
	},
	btnAcessar: {
		backgroundColor: colors.mainB,
		width: '96%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: metrics.borderRadius,
		margin: 5,
		marginTop: 10,
	},
	textAcessar: {
		color: colors.light,
		fontSize: 18
	},
	btnCadastrar: {
		marginTop: 15,
		marginBottom: 30
	},
	textCadastrar: {
		color: colors.mainB
	},
	links: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	}

});
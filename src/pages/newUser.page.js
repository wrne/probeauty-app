import React, { useState } from 'react'
import { StatusBar, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

import { useAuth } from '../contexts/user.context'

export default function NewUser({ navigation }) {

	const { createUser } = useAuth();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	function handleConfirm() {

		if (password === confirmPassword) {

			createUser({ name, phone, email, password });
			navigation.navigate('login')

		} else {

			Alert.alert('Senhas digitadas não conferem. Favor verificar.');

			setPassword('');
			setConfirmPassword('');

		}
		
	}

	function handleGoBack() {
		navigation.goBack()
	}

	return (
		<SafeAreaView>
			<StatusBar
				hidden
			/>
			<KeyboardAvoidingView style={styles.containerFields}>

				<TextInput placeholder="Nome" value={name} onChangeText={(t) => { setName(t) }} />
				<TextInput placeholder="Email" value={email} onChangeText={(t) => { setEmail(t) }} />
				<TextInput placeholder="Telefone" value={phone} onChangeText={(t) => { setPhone(t) }} />
				<TextInput placeholder="Senha" value={password} onChangeText={(t) => { setPassword(t) }} />
				<TextInput placeholder="Confirme a Senha" value={confirmPassword} onChangeText={(t) => { setConfirmPassword(t) }} />

				<TouchableOpacity /*style={styles.btnAcessar}*/ onPress={handleConfirm}>
					<Text style={styles.textAcessar}>Cadastrar</Text>
				</TouchableOpacity>

				<TouchableOpacity
				// style={styles.btnCadastrar}
				onPress={handleGoBack}
				>
					<Text /*style={styles.textCadastrar}*/>Cancelar</Text>
				</TouchableOpacity>

			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({})

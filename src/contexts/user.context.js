import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { UserService, getValidUserById, getValidUserByMail } from '../services/user.service';
// import { useMessages } from './message.context';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	// const { setMessage } = useMessages();

	useEffect(() => {

		const subscriber = UserService.validUser(setUser, setLoading)

		// return subscriber; // unsubscribe on unmount

	}, []);

	async function logIn(email, password) {

		try {
			if (!email || !password) {
				throw 'Usuário ou senha não informados.'
			}
			await UserService.login(email, password);

		} catch (error) {
			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
			return

		}
	};

	async function getInfoUser({uid, email}){

		let validUser = {};
		if (!!uid){

			validUser = await getValidUserById(uid)
		} else {
			validUser = await getValidUserByMail(email)
		}
		
		return validUser
	};

	async function logOut() {

		await UserService.logout();

	};

	async function createUser(newUser) {
		
		try {

			await UserService.createUser(newUser);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}
	
	async function updateUser({email, name, phone, personalId}) {

		let user = {};

		// Define propriedade alteradas do usuário
		if (name) user.name = name;
		if (email) user.email = email;
		if (phone) user.phone = phone;
		if (personalId) user.personalId = personalId;

		try {

			await UserService.updateUser(user);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
			return
		}
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, user, loading, logIn, logOut,createUser, updateUser, getInfoUser }}>
			{children}
		</AuthContext.Provider>
	)

};

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}


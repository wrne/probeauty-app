import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export async function getValidUserById(uid) {

	const infoUser = await firestore()
		.collection('Users')
		.doc(uid)
		.get()

	let validUser = infoUser.data();

	if (!!validUser) {

		// Trata dados disponibilizados do usuários
		delete validUser.password
		validUser.id = uid

	}
	return validUser
};

export async function getValidUserByMail(email) {

	let validUser = {};

	const querySnapshot = await firestore()
		.collection('Users')
		.where('email', '==', email)
		.get()

	querySnapshot.forEach(infoUser => {

		validUser = infoUser.data();

		if (!!validUser) {

			// Trata dados disponibilizados do usuários
			// delete validUser.password
			validUser.id = infoUser.id

		}

	})

	return validUser
};

export const UserService = {


	login: async (email, password) => {

		try {

			await auth().signInWithEmailAndPassword(email, password);

		} catch ({ code }) {

			if (code === 'auth/user-not-found') {
				throw 'Usuário não encontrado!'
			}

			if (code === 'auth/invalid-email') {
				throw 'O endereço de email é inválido!'
			}

			if (code === 'auth/wrong-password') {
				throw 'Senha incorreta!'
			}
		}
	},

	logout: async () => {

		try {
			await auth().signOut()

		} catch (error) {
			throw 'Falha no logout.'
		}
	},

	validUser: async (setUser, setLoading,) => {

		async function onAuthStateChanged(user) {

			if (!user) {

				// Realizado logout ou antes do login na aplicação
				setUser(null);

			} else {

				const validUser = await getValidUserById(user.uid)

				setUser(validUser);
			}
			console.log('Desativando Loading');
			setLoading(false);
		}

		auth().onAuthStateChanged(onAuthStateChanged);
	},


	async createUser(newUser) {

		try {

			// Cria login
			auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
				.then(({ user }) => {
					
					// Deleta propriedade de senha do usuário antes de salvar
					delete newUser.password

					// Cria usuário
					firestore()
						.collection('Users')
						.doc(user.uid)
						.set(newUser)
						.then(()=>{
							console.log('User added!',result);
						})
						.catch((e) => {
							throw e
						})

				})

		} catch (error) {

			if (code == 'auth/email-already-in-use') {
				throw 'Email já foi usado em outra conta.'
			}

			if (code == 'auth/invalid-email') {
				throw 'Endereço de email inválido.'
			}

			if (code == 'auth/operation-not-allowed') {
				throw 'Operação não permitida.'
			}

			if (code == 'auth/weak-password') {
				throw 'Senha não é forte o bastante.'
			}

			console.log('ERROR_CREATE_USER' + error);
			throw 'Falha ao criar novo usuário.\nTente novamente mais tarde';

		}

	},

	async updateUser({ email, password, name, phone, personalId }) {

		const user = auth().currentUser;

		let dataUpdateProfile = {};

		if (name) dataUpdateProfile.displayName = name;
		if (phone) dataUpdateProfile.phoneNumber = phone;

		try {

			await user.updateProfile(dataUpdateProfile)
			// TODO: Implementar atualização dos dados no fireStore
			
		} catch (error) {

			console.log('UPDUSER_SERVICE_ERROR', error);
			throw 'Falha ao atualizar o usuário.\nTente novamente mais tarde.'

		}
	}

}
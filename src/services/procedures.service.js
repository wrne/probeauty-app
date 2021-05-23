import firestore from '@react-native-firebase/firestore';

export const ProcedureService = {
	async subscribeProcedures(user, setProcedures, setLoading){

		let myProcedures = [];

		const subscriber = firestore()
			.collection('Procedures')
			.where('user', '==', user.id)
			.onSnapshot(querySnapshot => {

				myProcedures = [];

				querySnapshot.forEach(docSnapShot => {

					const doc = docSnapShot.data()

					const procedure = {
						id: docSnapShot.id,
						user: doc.user,
						description: doc.description,
						value: doc.value
					};

					myProcedures.push(procedure);
				});
				setProcedures(myProcedures);
				setLoading(false);

			});

		return subscriber;
	},

	async createProcedure(newProcedure){
		
		firestore()
			.collection('Procedures')
			.add(newProcedure)
			.then(() => {
				console.log('Procedure added!');
			});

	},

	async updateProcedure(procedure){
		
		firestore()
			.collection('Procedures')
			.doc(procedure.id)
			.update(procedure)
			.then(() => {
				console.log('Procedure updated!');
			});

	},
	async deleteProcedure(idProcedure){

		firestore()
		.collection('Procedures')
		.doc(idNote)
		.delete()
		.then(() => {
			console.log('Note deleted!');
		});

	},

}
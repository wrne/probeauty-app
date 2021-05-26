import firestore from '@react-native-firebase/firestore';

export const SalonService = {
	async subscribeSalons(user, setSalons, setLoading){

		let mySalons = [];

		const subscriber = firestore()
			.collection('Salons')
			.where('user.id', '==', user.id)
			.onSnapshot(querySnapshot => {

				mySalons = [];

				querySnapshot.forEach(docSnapShot => {

					const doc = docSnapShot.data()

					const salon = {
						id: docSnapShot.id,
						user: doc.user,
						name: doc.name,
						address: doc.address,
						commission: doc.commission,
						paymentDay: doc.paymentDay,
						salonPays: doc.salonPays						
					};

					mySalons.push(salon);
				});
				setSalons(mySalons);
				setLoading(false);

			});

		return subscriber;
	},

	async createSalon(newSalon){
		
		firestore()
			.collection('Salons')
			.add(newSalon)
			.then(() => {
				console.log('Salon added!');
			});

	},

	async updateSalon(Salon){
		console.log('update Salon',Salon);
		
		firestore()
			.collection('Salons')
			.doc(Salon.id)
			.update(Salon)
			.then(() => {
				console.log('Salon updated!');
			});

	},
	async deleteSalon(idSalon){

		firestore()
		.collection('Salons')
		.doc(idSalon)
		.delete()
		.then(() => {
			console.log('Salon deleted!');
		});

	},

}
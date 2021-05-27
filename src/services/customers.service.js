import firestore from '@react-native-firebase/firestore';

export const CustomerService = {
	async subscribeCustomers(user, setCustomers, setLoading){

		let myCustomers = [];

		const subscriber = firestore()
			.collection('Customers')
			.where('user.id', '==', user.id)
			.onSnapshot(querySnapshot => {

				myCustomers = [];

				querySnapshot.forEach(docSnapShot => {

					const doc = docSnapShot.data()

					const customer = {
						id: docSnapShot.id,
						user: doc.user,
						name: doc.name,
						birth: doc.birth,
						phone: doc.phone,
						email: doc.email,
						discount: doc.discount,
						canUsePhoto: doc.canUsePhoto,
						anamnese: doc.anamnese,
						mappingType: doc.mappingType,
						mapping: doc.mapping,
						thickness: doc.thickness,
						curvature: doc.curvature
					};

					myCustomers.push(customer);
				});
				setCustomers(myCustomers);
				setLoading(false);

			});

		return subscriber;
	},

	async createCustomer(newCustomer){
		
		firestore()
			.collection('Customers')
			.add(newCustomer)
			.then(() => {
				console.log('Customer added!');
			});

	},

	async updateCustomer(customer){
		console.log('update Customer',customer);
		
		firestore()
			.collection('Customers')
			.doc(customer.id)
			.update(customer)
			.then(() => {
				console.log('Customer updated!');
			});

	},
	async deleteCustomer(idCustomer){

		firestore()
		.collection('Customers')
		.doc(idCustomer)
		.delete()
		.then(() => {
			console.log('Customer deleted!');
		});

	},

}
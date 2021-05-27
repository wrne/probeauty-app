import firestore from '@react-native-firebase/firestore';

export const CustomerServiceService = {
	async subscribeCustomerServices(user, setCustomerServices, setLoading){

		let myCustomerServices = [];

		const subscriber = firestore()
			.collection('CustomerServices')
			.where('user.id', '==', user.id)
			.onSnapshot(querySnapshot => {

				myCustomerServices = [];

				querySnapshot.forEach(docSnapShot => {

					const doc = docSnapShot.data()

					const customerService = {
						id: docSnapShot.id,
						user: doc.user,
						date: doc.date,
						customer: doc.customer,
						procedure: doc.procedure,
						salon: doc.salon,
						amountCharged: doc.amountCharged
					};

					myCustomerServices.push(customerService);
				});
				setCustomerServices(myCustomerServices);
				setLoading(false);

			});

		return subscriber;
	},

	async createCustomerService(newCustomerService){
		
		firestore()
			.collection('CustomerServices')
			.add(newCustomerService)
			.then(() => {
				console.log('CustomerService added!');
			});

	},

	async updateCustomerService(customerService){
		console.log('update CustomerService',customerService);
		
		firestore()
			.collection('CustomerServices')
			.doc(customerService.id)
			.update(customerService)
			.then(() => {
				console.log('CustomerService updated!');
			});

	},
	async deleteCustomerService(idCustomerService){

		firestore()
		.collection('CustomerServices')
		.doc(idCustomerService)
		.delete()
		.then(() => {
			console.log('CustomerService deleted!');
		});

	},

}
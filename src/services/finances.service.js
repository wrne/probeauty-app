import firestore from '@react-native-firebase/firestore';

export const FinancialService = {
	async subscribeFinancials(user, setFinancials, setLoading){

		let myFinancials = [];

		console.log('subscriberFinancials user:',user);
		const subscriber = firestore()
			.collection('Financials')
			.where('user.id', '==', user.id)
			.onSnapshot(querySnapshot => {

				myFinancials = [];


				querySnapshot.forEach(docSnapShot => {

					const doc = docSnapShot.data()
					console.log('Query finances...',doc);

					const Financial = {
						id: docSnapShot.id,
						user: doc.user,
						date: doc.date,
						salon: doc.salon,
						procedure: doc.procedure,
						type: doc.type,
						valueReceived: doc.valueReceived,
						valueToTransfer: doc.valueToTransfer,
						liquidated: doc.liquidated,
					};

					myFinancials.push(Financial);
				});
				
				setFinancials(myFinancials);
				setLoading(false);

			});

		return subscriber;
	},

	async subscribeBalance(user, setBalance, setLoading){

		let myBalance = 0;

		const subscriber = firestore()
			.collection('Balance')
			.doc(user.id)
			.onSnapshot(querySnapshot => {

				myBalance = 0;

				querySnapshot.forEach(docSnapShot => {

					const doc = docSnapShot.data();
					myBalance = doc.balance;

				});
				setBalance(myBalance);
				setLoading(false);

			});

		return subscriber;
	},

	async createPayment(newPayment){
		
		firestore()
			.collection('Financials')
			.add(newPayment)
			.then(() => {
				console.log('Financial added!');
			});

	},

	async updatePayment(payment){
		
		firestore()
			.collection('Financials')
			.doc(payment.id)
			.update(payment)
			.then(() => {
				console.log('payment updated!');
			});

	},
	
	async deletePayment(idPayment){

		firestore()
		.collection('Financials')
		.doc(idPayment)
		.delete()
		.then(() => {
			console.log('Payment deleted!');
		});

	},

	async updateBalance(balance){
		
		console.log('Updating balance...');
		firestore()
			.collection('Balance')
			.doc(balance.user.id)
			.update(balance)
			.then(() => {
				console.log('balance updated!');
			});
	},
}
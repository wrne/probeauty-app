import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

// RoutesPages
import FinancialPage from '../../../pages/finances/all.finances.page'
import FinancialDetailPage from '../../../pages/finances/detail.financial.page'
import FinancialClosingPage from '../../../pages/finances/closing.finances.page'
import FinancialBalancePage from '../../../pages/finances/balance.finances.page'

// import {getDefaultHeader,getScreenRightButtonOption} from '../general.stackroutes';


const FinancialRoutesStack = createStackNavigator();

export default function FinancialRoutes() {

	// <FinancialRoutesStack.Navigator screenOptions={getDefaultHeader()}>
		{/* options={getScreenRightButtonOption()} /> */}
	return (
		<FinancialRoutesStack.Navigator >
			<FinancialRoutesStack.Screen name="all.financials" component={FinancialPage} options={{title: 'Financeiro'}}/>
			<FinancialRoutesStack.Screen name="new.financial" component={FinancialDetailPage} options={{title: 'Novo Pagamento'}}/>
			<FinancialRoutesStack.Screen name="detail.financial" component={FinancialDetailPage} options={{title: 'Detalhes de Pagamento'}}/>
			<FinancialRoutesStack.Screen name="closing.financials" component={FinancialClosingPage} options={{title: 'Fechamento'}}/>
			<FinancialRoutesStack.Screen name="balance.financials" component={FinancialBalancePage} options={{title: 'Saldo'}}/>
		</FinancialRoutesStack.Navigator>
	);
};

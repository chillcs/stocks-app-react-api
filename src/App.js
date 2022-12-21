import React from 'react';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Loading from './components/Loading';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [stocksUSD, setStocksUSD] = useState([]);

	useEffect(() => {
		fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/CAT,COST,EXPI,GOOG,HD,JMIA,LLY,PLTR,PYPL,UPWK,ZOM', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '69aafb449cmsh69b03d490febf69p1748cdjsnc60a61c4e79b',
				'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
			},
		})
			.then((data) => data.json())
			.then((data) => {
				setStocksUSD(data);
				setIsLoading(false);
			})
			.catch((err) => console.error(err));
	}, []);

	return <> {isLoading ? <Loading /> : <Dashboard stocksUSD={stocksUSD} />}</>;
};

export default App;


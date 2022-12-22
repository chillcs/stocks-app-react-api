import React from 'react';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Loading from './components/Loading';
import { HOLDINGS_CAD } from './components/HoldingsCAD';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [stocksData, setStocksData] = useState([]);
	const [stocksCAD, setStocksCAD] = useState([]);
	const [stocksUSD, setStocksUSD] = useState([]);

	useEffect(() => {
		fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AC.TO,BMO.TO,ENB.TO,GDNP.V,REI-UN.TO,SHOP.TO,T.TO,CAT,COST,EXPI,GOOG,HD,JMIA,LLY,PLTR,PYPL,UPWK,ZOM', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '69aafb449cmsh69b03d490febf69p1748cdjsnc60a61c4e79b',
				'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
			},
		})
			.then((data) => data.json())
			.then((data) => {
				setStocksData(data);
				setStocksCAD(data.slice(0, HOLDINGS_CAD.length));
				setStocksUSD(data.slice(HOLDINGS_CAD.length, data.length));
				setIsLoading(false);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			{' '}
			{isLoading ? (
				<Loading />
			) : (
				<Dashboard
					stocksData={stocksData}
					stocksCAD={stocksCAD}
					stocksUSD={stocksUSD}
				/>
			)}
		</>
	);
};

export default App;


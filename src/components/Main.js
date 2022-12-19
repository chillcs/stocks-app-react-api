import React from 'react';
import { useEffect, useState } from 'react';

const Main = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [stocksUSD, setStocksUSD] = useState([]);
	const [updateStocksUSD, setUpdateStocksUSD] = useState(false);

	useEffect(() => {
		fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/CAT,COST,EXPI,GOOG,HD', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '69aafb449cmsh69b03d490febf69p1748cdjsnc60a61c4e79b',
				'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
			},
		})
			.then((data) => data.json())
			.then((data) => {
				setStocksUSD(data);
				console.log(stocksUSD);
				setIsLoading(false);
			})
			.catch((err) => console.error(err));
	}, [updateStocksUSD]);

	const HOLDINGS_USD = [
		{
			symbol: 'CAT',
			quantity: 5,
		},
		{
			symbol: 'COST',
			quantity: 2,
		},
		{
			symbol: 'EXPI',
			quantity: 80,
		},
		{
			symbol: 'GOOG',
			quantity: 9,
		},
		{
			symbol: 'HD',
			quantity: 2,
		},
	];

	if (isLoading) {
		return (
			<>
				<div className="lds-grid-position">
					<div className="lds-grid">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="dashboard">
				<div className="page-title">Portfolio</div>
				<div className="portfolio">
					<div className="portfolio-title">Stocks (USD)</div>
					<div className="portfolio-btns">
						<button className="portfolio-btn" onClick={() => setUpdateStocksUSD(true)}>
							Update
						</button>
					</div>
				</div>
				<div className="table">
					<div className="row">
						<div className="column column-heading">Symbol</div>
						<div className="column column-heading">Quantity</div>
						<div className="column column-heading">Price</div>
						<div className="column column-heading">Value</div>
						<div className="column column-heading">Indicators</div>
					</div>
					{HOLDINGS_USD.map((holding, i) => {
						return (
							<div className="row" key={i}>
								<div className="column">{holding.symbol}</div>
								<div className="column">{holding.quantity}</div>
								<div className="column">${stocksUSD[i]['ask'].toFixed(2).toLocaleString()}</div>
								<div className="column">${(stocksUSD[i]['ask'] * holding.quantity).toFixed(2).toLocaleString()}</div>
								<div className="column indicators">
									<div className="indicator">{stocksUSD[i]['fiftyTwoWeekLowChangePercent'] > 0.6 ? 'S' : stocksUSD[i]['fiftyTwoWeekHighChangePercent'] < -0.4 ? 'B' : 'H'}</div>
									<div className="indicator">xx</div>
									<div className="indicator">xx</div>
									<div className="indicator">xx</div>
									<div className="indicator">xx</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Main;

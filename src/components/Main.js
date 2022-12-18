import React from 'react';
import { useEffect, useState } from 'react';

const Main = () => {
	const [stocksUSD, setStocksUSD] = useState([]);
	const [updateStocksUSD, setUpdateStocksUSD] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(
			'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/CAT,COST,EXPI,GOOG,HD',
			{
				method: 'GET',
				headers: {
					'X-RapidAPI-Key':
						'69aafb449cmsh69b03d490febf69p1748cdjsnc60a61c4e79b',
					'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
				},
			}
		)
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
						<button
							className="portfolio-btn"
							onClick={() => setUpdateStocksUSD(true)}
						>
							Update
						</button>
					</div>
				</div>
				<div className="table">
					<div className="row">
						<div className="column column-heading">Symbol</div>
						<div className="column column-heading">Price</div>
						<div className="column column-heading">Quantity</div>
						<div className="column column-heading">Value</div>
					</div>
					{HOLDINGS_USD.map((holding, i) => {
						return (
							<div className="row" key={i}>
								<div className="column">{holding.symbol}</div>
								<div className="column">{stocksUSD[i]['ask']}</div>
								<div className="column">{holding.quantity}</div>
								<div className="column">xx</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Main;

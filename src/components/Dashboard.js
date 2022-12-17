import React from 'react';

const Dashboard = () => {
	const cryptoHoldings = [
		{
			symbol: 'BTC',
			quantity: 0.078892,
			price: '22944.60',
		},
		{
			symbol: 'ETH',
			quantity: 0.810391,
			price: '1619.02',
		},
		{
			symbol: 'MATIC',
			quantity: 428.976491,
			price: '1.11',
		},
	];

	const stockHoldingsCAD = [
		{
			symbol: 'AC.TO',
			quantity: 15,
			price: '18.95',
		},
		{
			symbol: 'BMO.TO',
			quantity: 5,
			price: '120.63',
		},
		{
			symbol: 'ENB.TO',
			quantity: 12,
			price: '52.54',
		},
		{
			symbol: 'GDNP.V',
			quantity: 1200,
			price: '0.26',
		},
		{
			symbol: 'REI-UN.TO',
			quantity: 28,
			price: '20.81',
		},
		{
			symbol: 'SHOP.TO',
			quantity: 8,
			price: '49.40',
		},
		{
			symbol: 'T.TO',
			quantity: 20,
			price: '27.03',
		},
	];

	const stockHoldingsUSD = [
		{
			symbol: 'CAT',
			quantity: 5,
			price: '232.72',
		},
		{
			symbol: 'COST',
			quantity: 2,
			price: '461.45',
		},
		{
			symbol: 'EXPI',
			quantity: 80,
			price: '11.89',
		},
		{
			symbol: 'GOOG',
			quantity: 9,
			price: '90.86',
		},
		{
			symbol: 'HD',
			quantity: 2,
			price: '323.34',
		},
		{
			symbol: 'JMIA',
			quantity: 210,
			price: '3.40',
		},
		{
			symbol: 'LLY',
			quantity: 2,
			price: '359.87',
		},
		{
			symbol: 'PLTR',
			quantity: 70,
			price: '6.90',
		},
		{
			symbol: 'PYPL',
			quantity: 12,
			price: '69.26',
		},
		{
			symbol: 'UPWK',
			quantity: 50,
			price: '10.89',
		},
		{
			symbol: 'ZOM',
			quantity: 3800,
			price: '0.18',
		},
	];

	return (
		<>
			<div className="dashboard">
				<div className="page-title">Portfolio</div>
				<div className="heading">Crypto (CAD)</div>
				<div className="table">
					<div className="row">
						<div className="column column-heading">Symbol</div>
						<div className="column column-heading">Price</div>
						<div className="column column-heading">Quantity</div>
						<div className="column column-heading">Value</div>
					</div>
					{cryptoHoldings.map((holding) => {
						return (
							<div className="row">
								<div className="column">{holding.symbol}</div>
								<div className="column">{holding.price}</div>
								<div className="column">{holding.quantity}</div>
								<div className="column">
									{(holding.price * holding.quantity).toFixed(2)}
								</div>
							</div>
						);
					})}
				</div>
				<div className="heading">Stocks (CAD)</div>
				<div className="table">
					<div className="row">
						<div className="column column-heading">Symbol</div>
						<div className="column column-heading">Price</div>
						<div className="column column-heading">Quantity</div>
						<div className="column column-heading">Value</div>
					</div>
					{stockHoldingsCAD.map((holding) => {
						return (
							<div className="row">
								<div className="column">{holding.symbol}</div>
								<div className="column">{holding.price}</div>
								<div className="column">{holding.quantity}</div>
								<div className="column">
									{(holding.price * holding.quantity).toFixed(2)}
								</div>
							</div>
						);
					})}
				</div>
				<div className="heading">Stocks (USD)</div>
				<div className="table">
					<div className="row">
						<div className="column column-heading">Symbol</div>
						<div className="column column-heading">Price</div>
						<div className="column column-heading">Quantity</div>
						<div className="column column-heading">Value</div>
					</div>
					{stockHoldingsUSD.map((holding) => {
						return (
							<div className="row">
								<div className="column">{holding.symbol}</div>
								<div className="column">{holding.price}</div>
								<div className="column">{holding.quantity}</div>
								<div className="column">
									{(holding.price * holding.quantity).toFixed(2)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Dashboard;

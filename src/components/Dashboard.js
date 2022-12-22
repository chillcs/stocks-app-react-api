import React from 'react';
import { HOLDINGS_CAD } from './HoldingsCAD';
import { HOLDINGS_USD } from './HoldingsUSD';
import Indicators from './Indicators';

const Dashboard = (props) => {
	console.log(props.stocksCAD);
	console.log(props.stocksUSD);
	let totalCAD = 0;
	HOLDINGS_CAD.forEach((holding, i) => {
		totalCAD += props.stocksCAD[i]['ask'] * holding.quantity;
	});
	let totalUSD = 0;
	HOLDINGS_USD.forEach((holding, i) => {
		totalUSD += props.stocksUSD[i]['ask'] * holding.quantity;
	});
	return (
		<>
			<div className="dashboard">
				<div className="page-title">Portfolio</div>
				<div className="portfolio">
					<div className="portfolio-title">Stocks (CAD)</div>
					<div className="portfolio-value">${totalCAD.toFixed(2)}</div>
				</div>
				<div className="table">
					<div className="row">
						<div className="column column-heading">Symbol</div>
						<div className="column column-heading">Quantity</div>
						<div className="column column-heading">Price</div>
						<div className="column column-heading">Value</div>
						<div className="column column-heading">Indicators</div>
					</div>
					{HOLDINGS_CAD.map((holding, i) => {
						return (
							<div
								className="row"
								key={i}
							>
								<div className="column">{holding.symbol}</div>
								<div className="column">{holding.quantity}</div>
								<div className="column">${props.stocksCAD[i]['ask'].toFixed(2).toLocaleString()}</div>
								<div className="column">${(props.stocksCAD[i]['ask'] * holding.quantity).toFixed(2).toLocaleString()}</div>
								<Indicators
									stocksData={props.stocksData}
									i={i}
								/>
							</div>
						);
					})}
				</div>
				<div className="portfolio">
					<div className="portfolio-title">Stocks (USD)</div>
					<div className="portfolio-value">${totalUSD.toFixed(2)}</div>
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
							<div
								className="row"
								key={i}
							>
								<div className="column">{holding.symbol}</div>
								<div className="column">{holding.quantity}</div>
								<div className="column">${props.stocksUSD[i]['ask'].toFixed(2).toLocaleString()}</div>
								<div className="column">${(props.stocksUSD[i]['ask'] * holding.quantity).toFixed(2).toLocaleString()}</div>
								<Indicators
									stocksData={props.stocksData}
									i={i + HOLDINGS_CAD.length}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Dashboard;


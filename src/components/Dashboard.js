import React from 'react';
import { HOLDINGS_USD } from './HoldingsUSD';
import Indicators from './Indicators';

const Dashboard = (props) => {
	return (
		<>
			<div className="dashboard">
				<div className="page-title">Portfolio</div>
				<div className="portfolio">
					<div className="portfolio-title">Stocks (USD)</div>
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
									stocksUSD={props.stocksUSD}
									i={i}
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


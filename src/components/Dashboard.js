import React from 'react';

const Dashboard = () => {
	var cryptoHoldings = {
		holdings: [
			{
				symbol: 'BTC',
				conversion: 'CAD',
				quantity: 0.078892,
			},
			{
				symbol: 'ETH',
				conversion: 'CAD',
				quantity: 0.810391,
			},
			{
				symbol: 'MATIC',
				conversion: 'CAD',
				quantity: 428.976491,
			},
		],
	};

	return (
		<>
			<div className="dashboard">
				<div className="page-title">Portfolio</div>
				<div className="heading">Crypto</div>
				<div className="table">
					<div className="row">
						<div className="column">Symbol</div>
						<div className="column">Price</div>
						<div className="column">Quantity</div>
						<div className="column">Value</div>
					</div>
					<div className="row">
						<div className="column">BTC</div>
						<div className="column">22944.60 CAD</div>
						<div className="column">0.078892</div>
						<div className="column">{}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

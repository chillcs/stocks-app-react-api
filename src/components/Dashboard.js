import React from 'react';
import { useEffect, useState } from 'react';
import { CRYPTO_URLS, STOCK_URLS_CAD, STOCK_URLS_USD } from './Api';

const Dashboard = () => {
	const [cryptoData, setCryptoData] = useState([]);
	const [updateCrypto, setUpdateCrypto] = useState(false);
	const [dataBTC, setDataBTC] = useState([]);
	const [priceBTC, setPriceBTC] = useState([]);

	const [stocksDataCAD, setStocksDataCAD] = useState([]);
	const [updateStocksCAD, setUpdateStocksCAD] = useState(false);

	const [stocksDataUSD, setStocksDataUSD] = useState([]);
	const [updateStocksUSD, setUpdateStocksUSD] = useState(false);

	useEffect(() => {
		if (updateCrypto) {
			Promise.all([
				fetch(CRYPTO_URLS.BTC).then((data) => data.json()),
				fetch(CRYPTO_URLS.ETH).then((data) => data.json()),
				fetch(CRYPTO_URLS.MATIC).then((data) => data.json()),
			])
				.then((data) => {
					setCryptoData(Object.entries(data));
					return cryptoData;
				})
				.then((cryptoData) => {
					setDataBTC(cryptoData[0][1]);
					setPriceBTC(
						Number(
							Object.entries(
								dataBTC['Time Series (Digital Currency Monthly)']
							)[0][1]['4a. close (CAD)']
						).toFixed(2)
					);
				});
		}
	}, [updateCrypto]);

	console.log(dataBTC);
	console.log(priceBTC);

	useEffect(() => {
		if (updateStocksCAD) {
			Promise.all([
				fetch(STOCK_URLS_CAD.AC_TO).then((data) => data.json()),
				fetch(STOCK_URLS_CAD.BMO_TO).then((data) => data.json()),
				fetch(STOCK_URLS_CAD.ENB_TO).then((data) => data.json()),
				fetch(STOCK_URLS_CAD.GDNP_V).then((data) => data.json()),
				fetch(STOCK_URLS_CAD.REI_UN_TO).then((data) => data.json()),
				fetch(STOCK_URLS_CAD.SHOP_TO).then((data) => data.json()),
				fetch(STOCK_URLS_CAD.T_TO).then((data) => data.json()),
			]).then((data) => {
				setStocksDataCAD(data);
				return stocksDataCAD;
			});
		}
	}, [updateStocksCAD]);

	useEffect(() => {
		if (updateStocksUSD) {
			Promise.all([
				fetch(STOCK_URLS_USD.CAT).then((data) => data.json()),
				fetch(STOCK_URLS_USD.COST).then((data) => data.json()),
				fetch(STOCK_URLS_USD.EXPI).then((data) => data.json()),
				fetch(STOCK_URLS_USD.GOOG).then((data) => data.json()),
				fetch(STOCK_URLS_USD.HD).then((data) => data.json()),
				fetch(STOCK_URLS_USD.JMIA).then((data) => data.json()),
				fetch(STOCK_URLS_USD.LLY).then((data) => data.json()),
				fetch(STOCK_URLS_USD.PLTR).then((data) => data.json()),
				fetch(STOCK_URLS_USD.PYPL).then((data) => data.json()),
				fetch(STOCK_URLS_USD.UPWK).then((data) => data.json()),
				fetch(STOCK_URLS_USD.ZOM).then((data) => data.json()),
			]).then((data) => {
				setStocksDataUSD(data);
				return stocksDataUSD;
			});
		}
	}, [updateStocksUSD]);

	const CRYPTO_HOLDINGS = [
		{
			symbol: 'BTC',
			quantity: 0.078892,
			price: priceBTC,
		},
		{
			symbol: 'ETH',
			quantity: 0.810391,
			price: 1617.77,
		},
		{
			symbol: 'MATIC',
			quantity: 428.976491,
			price: 1.1,
		},
	];

	const STOCK_HOLDINGS_CAD = [
		{
			symbol: 'AC.TO',
			quantity: 15,
			price: 18.95,
		},
		{
			symbol: 'BMO.TO',
			quantity: 5,
			price: 120.63,
		},
		{
			symbol: 'ENB.TO',
			quantity: 12,
			price: 52.54,
		},
		{
			symbol: 'GDNP.V',
			quantity: 1200,
			price: 0.26,
		},
		{
			symbol: 'REI-UN.TO',
			quantity: 28,
			price: 20.81,
		},
		{
			symbol: 'SHOP.TO',
			quantity: 8,
			price: 49.4,
		},
		{
			symbol: 'T.TO',
			quantity: 20,
			price: 27.03,
		},
	];

	const STOCK_HOLDINGS_USD = [
		{
			symbol: 'CAT',
			quantity: 5,
			price: '232.72',
		},
		{
			symbol: 'COST',
			quantity: 2,
			price: 461.45,
		},
		{
			symbol: 'EXPI',
			quantity: 80,
			price: 11.89,
		},
		{
			symbol: 'GOOG',
			quantity: 9,
			price: 90.86,
		},
		{
			symbol: 'HD',
			quantity: 2,
			price: 323.34,
		},
		{
			symbol: 'JMIA',
			quantity: 210,
			price: 3.4,
		},
		{
			symbol: 'LLY',
			quantity: 2,
			price: 359.87,
		},
		{
			symbol: 'PLTR',
			quantity: 70,
			price: 6.9,
		},
		{
			symbol: 'PYPL',
			quantity: 12,
			price: 69.26,
		},
		{
			symbol: 'UPWK',
			quantity: 50,
			price: 10.89,
		},
		{
			symbol: 'ZOM',
			quantity: 3800,
			price: 0.18,
		},
	];

	return (
		<>
			<div className="dashboard">
				<div className="page-title">Portfolio</div>
				<div className="portfolio">
					<div className="portfolio-title">Crypto (CAD)</div>
					<div className="portfolio-btns">
						<button
							className="portfolio-btn"
							onClick={() => setUpdateCrypto(true)}
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
					{CRYPTO_HOLDINGS.map((holding, index) => {
						return (
							<div className="row" key={index}>
								<div className="column">{holding.symbol}</div>
								<div className="column">{holding.price}</div>
								<div className="column">{holding.quantity}</div>
								<div className="column">
									{holding.price > 0 &&
										(holding.price * holding.quantity).toFixed(2)}
								</div>
							</div>
						);
					})}
				</div>
				<div className="portfolio">
					<div className="portfolio-title">Stocks (CAD)</div>
					<div className="portfolio-btns">
						<button
							className="portfolio-btn"
							onClick={() => setUpdateStocksCAD(true)}
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
					{STOCK_HOLDINGS_CAD.map((holding, index) => {
						return (
							<div className="row" key={index}>
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
					{STOCK_HOLDINGS_USD.map((holding, index) => {
						return (
							<div className="row" key={index}>
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

import { useState, useEffect } from 'react';
import Axios from 'axios';
import { API_KEY } from '../api/config';

const Data = () => {
	const [stockData, setStockData] = useState({});
	const [symbol, setSymbol] = useState(0); // Symbol
	const [name, setName] = useState(''); // Name
	const [sector, setSector] = useState(''); // Sector
	const [industry, setIndustry] = useState(''); // Industry
	const [currency, setCurrency] = useState(''); // Currency
	const [marketCap, setMarketCap] = useState(0); // MarketCapitalization
	const [sharesOutstanding, setSharesOutstanding] = useState(0); // SharesOutstanding
	const [divYield, setDivYield] = useState(0); // DividendYield
	const [PERatio, setPERatio] = useState(0); // PERatio
	const [ForwardPE, setForwardPE] = useState(0); // ForwardPE
	const [EPS, setEPS] = useState(0); // EPS
	const [PEGRatio, setPEGRatio] = useState(0); // PEGRatio
	const [priceToSalesRatio, setPriceToSalesRatio] = useState(0); // PriceToSalesRatioTTM
	// const [movingAvg50, setMovingAvg50] = useState(0); // 50DayMovingAverage
	// const [movingAvg200, setMovingAvg200] = useState(0); // 200DayMovingAverage

	const SYMBOL = 'AMD';
	const URL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${SYMBOL}&apikey=${API_KEY}`;

	useEffect(() => {
		fetchStockData();
	}, []);

	const fetchStockData = async () => {
		const response = await Axios(URL);
		setStockData(response.data);
		setSymbol(stockData.Symbol);
		setName(stockData.Name);
		setSector(stockData.Sector);
		setIndustry(stockData.Industry);
		setCurrency(stockData.Currency);
		setMarketCap(stockData.MarketCapitalization);
		setSharesOutstanding(stockData.SharesOutstanding);
		setDivYield(stockData.DividendYield);
		setPERatio(stockData.PERatio);
		setForwardPE(stockData.ForwardPE);
		setEPS(stockData.EPS);
		setPEGRatio(stockData.PEGRatio);
		setPriceToSalesRatio(stockData.PriceToSalesRatioTTM);
		// setMovingAvg50(stockData.50DayMovingAverage);
		// setMovingAvg200(stockData.200DayMovingAverage);
	};

	return (
		<>
			<div className="data">
				<div>Symbol: {symbol}</div>
				<div>Name: {name}</div>
				<div>Sector: {sector}</div>
				<div>Industry: {industry}</div>
				<div>
					Price: {marketCap / sharesOutstanding} {currency}
				</div>
				<div>Market Cap:{marketCap}</div>
				<div>Dividend Yield: {divYield}</div>
				<div>PE Ratio: {PERatio}</div>
				<div>Forward PE: {ForwardPE}</div>
				<div>EPS: {EPS}</div>
				<div>PEG Ratio{PEGRatio}</div>
				<div>Price to Sales: {priceToSalesRatio}</div>
				<div>50 Day Moving Avg: {priceToSalesRatio}</div>
				<div>200 Day Moving Avg: {priceToSalesRatio}</div>
			</div>
		</>
	);
};

export default Data;

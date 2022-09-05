import { useState, useEffect } from 'react';
import Axios from 'axios';
import { API_KEY } from '../api/config';

const Data = () => {
	const [stockData, setStockData] = useState({});
	const [stockQuote, setStockQuote] = useState({});
	const [symbol, setSymbol] = useState(0); // Symbol
	const [name, setName] = useState(''); // Name
	const [sector, setSector] = useState(''); // Sector
	const [industry, setIndustry] = useState(''); // Industry
	const [price, setPrice] = useState(0); // ['Global Quote']['05. price']
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

	const SYMBOL = 'F';
	const URL_DATA = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${SYMBOL}&apikey=${API_KEY}`;
	const URL_QUOTE = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${API_KEY}`;

	useEffect(() => {
		fetchStockData();
	}, [SYMBOL]);

	const fetchStockData = async () => {
		const response = await Axios(URL_DATA);
		setStockData(response.data);
		setSymbol(stockData.Symbol);
		setName(stockData.Name);
		setSector(stockData.Sector);
		setIndustry(stockData.Industry);
		setMarketCap(stockData.MarketCapitalization);
		setSharesOutstanding(stockData.SharesOutstanding);
		setCurrency(stockData.Currency);
		setDivYield(stockData.DividendYield);
		setPERatio(stockData.PERatio);
		setForwardPE(stockData.ForwardPE);
		setEPS(stockData.EPS);
		setPEGRatio(stockData.PEGRatio);
		setPriceToSalesRatio(stockData.PriceToSalesRatioTTM);
		// setMovingAvg50(stockData.50DayMovingAverage);
		// setMovingAvg200(stockData.200DayMovingAverage);
	};

	useEffect(() => {
		fetchStockQuote();
	}, [SYMBOL]);

	const fetchStockQuote = async () => {
		const response = await Axios(URL_QUOTE);
		setStockQuote(response.data);
		setPrice(stockQuote['Global Quote']['05. price']);
		console.log(price);
	};
	return (
		<>
			<div className="data">
				<div>Symbol: {symbol}</div>
				<div>Name: {name}</div>
				<div>Sector: {sector}</div>
				<div>Industry: {industry}</div>
				<div>
					Price: $ {price} {currency}
				</div>
				<div>Dividend Yield: {divYield * 100} %</div>
				<div>PE Ratio: {PERatio}</div>
				<div>Forward PE: {ForwardPE}</div>
				<div>EPS: {EPS}</div>
				<div>PEG Ratio: {PEGRatio}</div>
				<div>Price to Sales: {priceToSalesRatio}</div>
			</div>
		</>
	);
};

export default Data;

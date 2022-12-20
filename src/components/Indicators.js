export const INDICATORS = [
	{
		buy: `data.stocksUSD[i]['fiftyDayAverage'] > data.stocksUSD[i]['twoHundredDayAverage']`,
		sell: `stocksUSD[i]['fiftyDayAverage'] < data.stocksUSD[i]['twoHundredDayAverage']`,
	},
	{
		buy: `data.stocksUSD[i]['twoHundredDayAverageChangePercent'] < 0`,
		sell: `data.stocksUSD[i]['twoHundredDayAverageChangePercent'] > 0.2`,
	},
	{
		buy: `data.stocksUSD[i]['fiftyTwoWeekHighChangePercent'] < -0.4`,
		sell: `data.stocksUSD[i]['fiftyTwoWeekLowChangePercent'] > 0.6`,
	},
	{
		buy: `data.stocksUSD[i]['epsTrailingTwelveMonths'] < data.stocksUSD[i]['epsForward'] / 1.15`,
		sell: `data.stocksUSD[i]['epsTrailingTwelveMonths'] > data.stocksUSD[i]['epsForward'] * 1.15`,
	},
	{
		buy: `data.stocksUSD[i]['forwardPE'] < data.stocksUSD[i]['trailingPE'] / 1.15`,
		sell: `data.stocksUSD[i]['forwardPE'] > data.stocksUSD[i]['trailingPE'] * 1.15`,
	},
];

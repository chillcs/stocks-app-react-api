import React from 'react';

const Indicators = (props) => {
	let B1 = props.stocksUSD[props.i]['fiftyDayAverage'] > props.stocksUSD[props.i]['twoHundredDayAverage'];
	let S1 = props.stocksUSD[props.i]['fiftyDayAverage'] < props.stocksUSD[props.i]['twoHundredDayAverage'];

	let B2 = props.stocksUSD[props.i]['twoHundredDayAverageChangePercent'] < 0;
	let S2 = props.stocksUSD[props.i]['twoHundredDayAverageChangePercent'] > 0.2;

	let B3 = props.stocksUSD[props.i]['fiftyTwoWeekHighChangePercent'] < -0.4;
	let S3 = props.stocksUSD[props.i]['fiftyTwoWeekLowChangePercent'] > 0.6;

	let B4 = props.stocksUSD[props.i]['epsTrailingTwelveMonths'] < props.stocksUSD[props.i]['epsForward'] / 1.15;
	let S4 = props.stocksUSD[props.i]['epsTrailingTwelveMonths'] > props.stocksUSD[props.i]['epsForward'] * 1.15;

	let B5 = props.stocksUSD[props.i]['forwardPE'] < props.stocksUSD[props.i]['trailingPE'] / 1.15;
	let S5 = props.stocksUSD[props.i]['forwardPE'] > props.stocksUSD[props.i]['trailingPE'] * 1.15;

	const symbol = '•';

	return (
		<>
			<div className="column indicators">
				{B1 ? <div className="indicator buy">{symbol}</div> : S1 ? <div className="indicator sell">{symbol}</div> : <div className="indicator hold">{symbol}</div>}
				{B2 ? <div className="indicator buy">{symbol}</div> : S2 ? <div className="indicator sell">{symbol}</div> : <div className="indicator hold">{symbol}</div>}
				{B3 ? <div className="indicator buy">{symbol}</div> : S3 ? <div className="indicator sell">{symbol}</div> : <div className="indicator hold">{symbol}</div>}
				{B4 ? <div className="indicator buy">{symbol}</div> : S4 ? <div className="indicator sell">{symbol}</div> : <div className="indicator hold">{symbol}</div>}
				{B5 ? <div className="indicator buy">{symbol}</div> : S5 ? <div className="indicator sell">{symbol}</div> : <div className="indicator hold">{symbol}</div>}
			</div>
		</>
	);
};

export default Indicators;


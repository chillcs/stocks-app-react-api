const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69aafb449cmsh69b03d490febf69p1748cdjsnc60a61c4e79b',
		'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
	},
};

fetch(
	'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT',
	options
)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));

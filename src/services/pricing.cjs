const rp = require('request-promise');

const requestOptions = (apiKey) => {
    return {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
            'start': '1',
            'limit': '5000',
            'convert': 'USD'
        },
        headers: {
            'X-CMC_PRO_API_KEY': apiKey
        },
        json: true,
        gzip: true
    }
};

const fetchPrice = async (apiKey, crypto, isManual = false, definedPrice = null) => {
    if(isManual){
        definedPrice !== null ? definedPrice = parseInt(definedPrice) : definedPrice = Math.random()
        console.log(`Defining manual price for ${crypto.ticker} : ${definedPrice}`);
    }
    else if (apiKey && crypto && !isManual){

            let response = await rp(requestOptions(apiKey));
            let price = parseFloat(response.data.filter((element) => element.id === crypto.id).map((element) => element.quote.USD.price));
            return price;
    } else {
        console.log('Missing parameters, null or undefined')
    }

};

exports.fetchPrice = fetchPrice;
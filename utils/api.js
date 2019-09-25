/*const alpha = require('alphavantage')({ key: 'JTEWKDBFQWKXBT9C' });


export const fetchPriceInfo = async(symbol) => {
  const data = await alpha.data.quote(symbol);
  const quote = data['Global Quote'];
  return {
    open: quote['02. open'], 
    high: quote['03. high'],
    low: quote['04. low'],
    price: quote['05. price']
  }
}


*/
const apiKey = 'JTEWKDBFQWKXBT9C';

export const fetchPriceInfo = async (symbol) => {
  const query = 'GLOBAL_QUOTE';
  const response = await fetch(`https://www.alphavantage.co/query?function=${query}&symbol=${symbol}&apikey=${apiKey}`)
  const data = await response.json();
  //console.log(data['Global Quote']);
  const quote = data['Global Quote'];
  return {
    open: quote['02. open'], 
    high: quote['03. high'],
    low: quote['04. low'],
    price: quote['05. price']
  }
}


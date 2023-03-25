const exchangeRate = {
    KZT: { USD: 0.0022, EUR: 0.0019 },
    USD: { KZT: 452.76, EUR: 0.86 },
    EUR: { KZT: 517.43, USD: 1.17 }
}

const inputValue = document.getElementById("input-value"); 
const inputCurrency = document.getElementById("input-currency"); 
const usdResult = document.getElementById("usd-result"); 
const kztResult = document.getElementById("kzt-result");
const eurResult = document.getElementById("eur-result"); 

function convertCurrency(currency){
    const selectedCurrency = currency;
    const value = parseFloat(inputValue.value); 

    if (isNaN(value)){
        kztResult.textContent = '-'; 
        usdResult.textContent = '-'; 
        eurResult.textContent = '-'; 
        return; 
    }

    const kztExchangeRate = exchangeRate[selectedCurrency]['KZT']; 
    const usdExchangeRate = exchangeRate[selectedCurrency]['USD']; 
    const eurExchangeRate = exchangeRate[selectedCurrency]['EUR'];

    kztResult.textContent = selectedCurrency === 'KZT' ? '-': (value*kztExchangeRate).toFixed(2);
    usdResult.textContent = selectedCurrency === 'USD' ? '-': (value*usdExchangeRate).toFixed(2); 
    eurResult.textContent = selectedCurrency === 'EUR' ? '-': (value*eurExchangeRate).toFixed(2);
}

inputValue.addEventListener('input', () => convertCurrency(inputCurrency.value)); 
inputCurrency.addEventListener('change', () => convertCurrency(inputCurrency.value));
'use strict';

const inputEur = document.querySelector('#eur');
const inputUsd = document.querySelector('#usd');
const inputGbp = document.querySelector('#gbp');


function getExchangeRates(callback) {
    const request = new XMLHttpRequest();
    
    request.open('GET', 'js/current.json'); 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            callback(data.current); 
        } else {
            inputUsd.value = "Error";
            inputGbp.value = "Error";
        }
    });
}


inputEur.addEventListener('input', () => {
    getExchangeRates((rates) => {
        inputUsd.value = (+inputEur.value * rates.usd).toFixed(2);
        inputGbp.value = (+inputEur.value * rates.gbp).toFixed(2);
    });
});


inputUsd.addEventListener('input', () => {
    getExchangeRates((rates) => {
        inputEur.value = (+inputUsd.value / rates.usd).toFixed(2);
        inputGbp.value = (+inputUsd.value / rates.usd * rates.gbp).toFixed(2);
    });
});


inputGbp.addEventListener('input', () => {
    getExchangeRates((rates) => {
        inputEur.value = (+inputGbp.value / rates.gbp).toFixed(2);
        inputUsd.value = (+inputGbp.value / rates.gbp * rates.usd).toFixed(2);
    });
});


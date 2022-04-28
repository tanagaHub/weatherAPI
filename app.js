import { cardTemplate, optionsTemplate, arr } from './cardTemplate.js'
import { render } from 'https://unpkg.com/lit-html?module';
import { city, countryCode } from "./getip.js"
import { getCurrentForecast } from './weatherapi.js'

let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${localStorage.getItem("city") || city}&country=${localStorage.getItem("countryCode") || countryCode}&days=5&key=db9d0e59b2024496af26d5b280f68ebe`;

let result = await getCurrentForecast(url);

const divContainer = document.getElementById('div')

render(cardTemplate(result), divContainer);
const divsearch = document.getElementById('search')
render(optionsTemplate(arr), divsearch)

let btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
    let input = document.getElementById('city');
    let inputcountry = document.getElementById('code');

    if (input.value.length == 0 || inputcountry.value.length == 0) {
        alert("Попълни всички полета, пичка ти матрина!")
    } else {

        localStorage.setItem("city", `${input.value}`);
        localStorage.setItem("countryCode", `${inputcountry.value}`);

        let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${input.value}&country=${inputcountry.value}&days=5&key=db9d0e59b2024496af26d5b280f68ebe`;
        let searched = await getCurrentForecast(url);

        render(cardTemplate(searched), divContainer);
        input.value = ''
        inputcountry.value = ''
    }    
});    








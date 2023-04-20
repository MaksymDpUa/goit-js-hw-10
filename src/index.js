import './css/styles.css';
import { fetchCountries } from "./helpers/fetchCountries.js"

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
    const country = evt.target.value;
fetchCountries(country).then(data => console.log(data))
    console.log(country);
}


// fetchCountries('deutschland').then(data => console.log(data))

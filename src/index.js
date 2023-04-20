import './css/styles.css';
import { fetchCountries } from "./helpers/fetchCountries.js"


const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

searchBox.addEventListener('input', onSearch);

function onSearch() {

}


fetchCountries('deutschland').then(data => console.log(data))

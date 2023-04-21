import './css/styles.css';
import { fetchCountries } from './helpers/fetchCountries.js';
import Notiflix from 'notiflix';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');

const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
const countryList = document.querySelector('.country-list');
console.log(countryInfo);

function onSearch(evt) {
  const country = evt.target.value.trim();

  fetchCountries(country).then(data => {
    if (!evt.target.value) {
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
      return
    }
    else if (data.length > 10) {
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
      countryList.innerHTML = '';
    } else if (data.length > 1 && data.length < 10) {
      createShortList(data);
      countryInfo.innerHTML = '';
    } else if (data.length === 1) {
      createfullDisc(data);
      countryList.innerHTML = '';
    }
  }).catch(e => {
          countryList.innerHTML = '';
      countryInfo.innerHTML = '';
    console.log(e)
  })
  console.log(country);
}

function createShortList(countries) {
  shortList = countries
    .map(country => {
      const {
        name: { official },
        flags: { svg },
      } = country;
      return `<li>
        <img src="${svg}" alt="${official}" />
        <h2>${official}</h2>
      </li>`;
    })
    .join('');
  countryList.innerHTML = shortList;
}

function createfullDisc(data) {
  const targetContry = data.shift();
  console.log(targetContry);
  const {
    name: { official },
    flags: { svg },
    capital,
    population,
    languages,
  } = targetContry;
  let countryLanguages = ``;
  for (lang in languages) {
    countryLanguages += `${languages[lang]}, `;
  }
  const fullDisc = `<div class="title-box">
      <img src="${svg}" alt="${official}" />
      <h2>${official}</h2>
    </div>
    <p>Capital: ${capital[0]}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${countryLanguages}</p>`;
  console.log(fullDisc);
  countryInfo.innerHTML = fullDisc;
}
// function createShortMarkUp(list) {
//   // const countryList = document.querySelector('country-list');
//   countryList.insertAdjacentHTML('beforeend', list);
// }

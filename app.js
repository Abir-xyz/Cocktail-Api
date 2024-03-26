import displayData from './src/displayData.js';
import './src/searchDrink.js';

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k`;

window.addEventListener('DOMContentLoaded', () => {
  displayData(URL);
});

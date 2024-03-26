import getElment from './getElement.js';
import displayData from './displayData.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = getElment('.form');
const input = getElment('[name = "drink"]');

form.addEventListener('keyup', function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    return value;
  } else {
    displayData(`${URL} ${value}`);
  }
});

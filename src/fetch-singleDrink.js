import fetchData from './fetchData.js';
import displayDrink from './display-singleDrink.js';

const singleDrink = async () => {
  const id = localStorage.getItem('drinkId');
  if (!id) {
    window.location.replace('./index.html');
  } else {
    const fetchInfo = await fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(fetchInfo);
  }
};

window.addEventListener('DOMContentLoaded', singleDrink);

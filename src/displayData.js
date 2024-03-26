import getData from './getData.js';
import fetchData from './fetchData.js';
import setDrink from './target-drink.js';

const displayData = async (url) => {
  // fetch data
  // set data
  const drinks = await fetchData(url);
  const section = getData(drinks);
  if (section) {
    return setDrink(section);
  }
};

export default displayData;

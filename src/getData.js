import getElement from './getElement.js';

const getData = ({ drinks }) => {
  const container = getElement('.content-wrapper');
  const warning = getElement('.warning');
  if (!drinks) {
    container.innerHTML = null;
    warning.textContent = `Sorry, no drinks found`;
  } else {
    const allDrinks = drinks
      .map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;
        return `    <a href="./drink.html" class="content-container">
          <article class="content" data-id= "${id}" >
            <img src="${img}" class="drink-img" />
            <h3 class="drink-title">${name}</h3>
          </article>
        </a>`;
      })
      .join('');
    container.innerHTML = allDrinks;
    warning.textContent = '';
    return container;
  }
};

export default getData;

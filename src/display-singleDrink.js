import getElement from './getElement.js';

const displayDrink = ({ drinks }) => {
  const drink = drinks[0];
  const { strDrink: name, strInstructions: desc, strDrinkThumb: img } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const drinkImg = getElement('.info-img');
  const drinkName = getElement('.info-title');
  const drinkDesc = getElement('.info-text');
  const drinkIngredients = getElement('.ingredient-wrapper');
  document.title = name;
  drinkName.textContent = name;
  drinkDesc.textContent = desc;
  drinkImg.src = img;
  drinkIngredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li>> ${item}</li>`;
    })
    .join('');
};

export default displayDrink;

function setDrink(section) {
  section.addEventListener('click', function (e) {
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('drinkId', id);
  });
}

export default setDrink;

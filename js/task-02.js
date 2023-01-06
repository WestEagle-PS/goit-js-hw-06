const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = document.querySelector('#ingredients');

ingredients.forEach(element => {
  const createEl = document.createElement('li');
  itemEl.append(createEl);
  createEl.textContent = element;
  createEl.classList.add('item');
});

console.log(itemEl);

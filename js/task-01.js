const itemElAll = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemElAll.length}`);

itemElAll.forEach(elem => {
  console.log(`Category: ${elem.querySelector('h2').textContent}`);
  console.log(`Elements: ${elem.querySelectorAll('li').length}`);
});

const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const clearBtnEl = document.querySelector('[data-destroy]');

const boxes = document.querySelector('#boxes');
boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.alignItems = 'center';
boxes.style.justifyContent = 'center';

let defaultSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickCreateDiv() {
  for (let i = 1; i <= inputEl.value; i += 1) {
    boxes.insertAdjacentHTML(
      'beforeend',
      `<div style="background-color:${getRandomHexColor()}; width:${defaultSize}px; height:${defaultSize}px; margin:5px"></div>`,
    );
    defaultSize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = ' ';
  defaultSize = 30;
}

createBtnEl.addEventListener('click', onClickCreateDiv);
clearBtnEl.addEventListener('click', destroyBoxes);

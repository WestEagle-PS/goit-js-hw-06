const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

function onChangeStyle(event) {
  spanEl.style.fontSize = `${inputEl.value}px`;
}

inputEl.addEventListener('input', onChangeStyle);

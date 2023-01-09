const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function onInputChange(event) {
  if (inputEl.value === '') {
    spanEl.innerHTML = 'Anonymous';
  } else {
    spanEl.innerHTML = inputEl.value;
  }
}

inputEl.addEventListener('input', onInputChange);

const validationEl = document.querySelector(`#validation-input`);
function onValidateInput() {
  if (validationEl.value.length === Number(validationEl.dataset.length)) {
    validationEl.classList.remove(`invalid`);
    validationEl.classList.add(`valid`);
  } else {
    validationEl.classList.remove(`valid`);
    validationEl.classList.add(`invalid`);
  }
}

validationEl.addEventListener(`blur`, onValidateInput);

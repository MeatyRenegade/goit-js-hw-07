const inputElementRef = document.querySelector('input#name-input');
const titleElementRef = document.querySelector('span#name-output');

const onInputHandler = event => {
  titleElementRef.textContent = inputElementRef.value
    ? inputElementRef.value
    : 'незнакомец';
};

inputElementRef.addEventListener('input', onInputHandler);

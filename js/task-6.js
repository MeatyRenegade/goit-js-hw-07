const validationElementRef = document.querySelector('input#validation-input');

const onFocusOutHandler = function (event) {
  const textLength = this.value.length;
  const characterLimit = Number(this.dataset.length);
  if (textLength === characterLimit) {
    this.classList.add('valid');
    this.classList.remove('invalid');
  } else {
    this.classList.add('invalid');
    this.classList.remove('valid');
  }
};

validationElementRef.addEventListener('blur', onFocusOutHandler);

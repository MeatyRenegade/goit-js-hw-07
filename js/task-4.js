const counterValue = {
  value: 0,
  refs: {
    title: document.querySelector('span#value'),
    buttons: document.querySelectorAll('#counter [data-action]'),
  },

  increment() {
    this.value += 1;
    this.refs.title.textContent = this.value;
  },

  decrement() {
    this.value -= 1;
    this.refs.title.textContent = this.value;
  },

  init() {
    this.value = Number(this.refs.title.textContent);
    this.refs.buttons.forEach(button => {
      const action = button.dataset.action;
      button.addEventListener('click', this[action].bind(this));
    });
  },
};

document.addEventListener(
  'DOMContentLoaded',
  counterValue.init.bind(counterValue),
);

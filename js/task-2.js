const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsRef = document.querySelector('#ingredients');

// const ingredientItem = ingredient => {
//   const ingredientElement = document.createElement('li');
//   ingredientElement.textContent = ingredient;

//   return ingredientElement;
// };

// const renderIngredientList = ingredientList => {
//   const ingredientsElements = ingredientList.map(ingredient =>
//     ingredientItem(ingredient),
//   );
//   ingredientsRef.append(...ingredientsElements);
// };

// renderIngredientList(ingredients);

const ingredientsRef = document.querySelector('#ingredients');

const renderIngredientList = ingredients.map(ingredient => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = ingredient;

  return ingredientElement;
});

ingredientsRef.append(...renderIngredientList);

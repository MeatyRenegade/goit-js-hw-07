const categoriesCountRef = document.querySelectorAll('li.item');

console.log(`В списке ${categoriesCountRef.length} категории.`);

categoriesCountRef.forEach(category => {
  const title = category.firstElementChild.textContent;
  const elementCount = category.querySelectorAll('li').length;
  console.log(
    `\n\u2022 Категория: ${title}\n\u2022 Количество элементов: ${elementCount}`,
  );
});

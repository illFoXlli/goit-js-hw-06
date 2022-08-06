'use strict';
const classItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${classItem.length}`);

classItem.forEach(item => {
  const nameTitle = item.firstElementChild.textContent;
  const listLength = item.lastElementChild.children.length;
  console.log('Category: ' + nameTitle + '\n' + 'Elements: ' + listLength);
});

console.log(classItem.lastElementChild.children);;

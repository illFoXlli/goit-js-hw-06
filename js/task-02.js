'use strict';
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const elementIngredients = document.querySelector('#ingredients');
const arrayAddLiItem = [];
ingredients.forEach(valio => {
    const elementLi = document.createElement('li');
    elementLi.textContent = valio;
    elementLi.classList.add('item');

    arrayAddLiItem.push(elementLi);
});
elementIngredients.append(...arrayAddLiItem);

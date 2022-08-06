// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let createInput = document.querySelector('[data-create]');
let DestroyInput = document.querySelector('[data-destroy]');
let input = document.querySelector('[type="number"]');
let box = document.querySelector('#boxes');




// мжно ли в foo сделать диструктуризацию
// как лучше должно быть
const foo = () => {
    let number = input.value;
    let array = [];
    for (let i = 1; i <= number; i++) {
        const divItem = document.createElement('div');
        divItem.style.width = i * 10 + 20 + 'px';
        divItem.style.height = i * 10 + 20 + 'px';
        divItem.style.backgroundColor = getRandomHexColor();
        array.push(divItem);
    }
    box.append(...array);
};

createInput.addEventListener('click', foo);
DestroyInput.addEventListener('click', () => {
    box.innerHTML = '';
});

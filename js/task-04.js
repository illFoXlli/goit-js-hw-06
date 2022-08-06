// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue. 
let counterValue = document.querySelector('#value');
let dataDecrement = document.querySelector('[data-action="decrement"]');
let dataIncrement = document.querySelector('[data-action="increment"]');


let total = 0;
dataDecrement.addEventListener('click', () => callback('decrement'));
dataIncrement.addEventListener('click', () => callback('increment'));
//задать вопрос по колбеку как сделать функцию
function callback(v) {
//     console.log('v,', v)
//     if (v === 'increment') {
//         total++;
//     }
//     else total--;
    
    v === "increment" && total++;
    v === 'decrement' && total--;
    return (counterValue.textContent = total);
};

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);
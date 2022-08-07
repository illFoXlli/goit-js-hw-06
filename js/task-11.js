// console.log("sdfsdfsdf");


// let array = [2, 3, 5, 6, 7, 10, 12, 65, 5]

// // sort js напиать
// // console.log(array.sort((a, b) => a - b));

// function newSort(arr, a, b) {
//     [arr[a],arr[b]]=[arr[b],arr[a]]
// }
// console.log(newSort (array,1,2));
// // const sortNew = (callback) => {}

// // function callback(valio, item, array) {
// //     for (let item = 0; item < array.length; item++){
        
// //     }
// // }

// // for (let i = 0; i < array; i++){
    
// // }
// let arr = [6, 65, 3, 1, 98, 87, 42, 24];
// console.log(arr);

// // function swap(arr, i, j) {
// //     [arr[i], arr[j]] = [arr[j], arr[i]];
// // }
// // // Выбрать сортировку
// // function selectSort(arr) {
// //     let min;
// //     for (let i = 0; i < arr.length - 1; i++) {
// //         min = i;
// //         for (let j = i + 1; j < arr.length; j++) {
// //             if (arr[j] < arr[min]) {
// //                 min = j;
// //             }
// //         }
// //         if (min !== i) {
// //             swap(arr, i, min);
// //         }
// //     }
// // }

// const handleClick = event => {
//     console.log(event);
// };
const list = document.querySelector(".list")
const bodyButton = document.querySelector("body")

// bodyButton.innerHTML = `<button class="button-style">кнопка</button>`;
bodyButton.insertAdjacentHTML(
    'afterbegin',
    `<button class="button-style">кнопка</button>`
);
const divButton = document.querySelector(".button-list")
const buttonNumberOne = document.querySelector('.button-style');
let btn2 = document.createElement('button');
console.log(buttonNumberOne);

const array = [];
buttonNumberOne.addEventListener("click", (e) => {
    btn2 = document.createElement('button');
    btn2.classList.add('button-style');
    btn2.textContent = "привет"
    // const x = document.createElement("<button>");
    divButton.append(btn2);
    array.push(btn2);
    console.log(e);
    console.log(array);
})

console.log(array);
btn2.addEventListener('click', e => {
    array[0]
    
});




// 1 создать кнопку в боди.
// 2 кнопка должна уметь создавать кнопки в Классе button-list с классом btn
// 3 посмотреть как работает сулушитель событий на эти кнопки и на див в котором они лежат.

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


let inputValue = document.querySelector('#name-input');
let outputValue = document.querySelector('#name-output');

// console.log(outputValue.textContent);

const callback = (   { currentTarget: { value } } ) => {
    console.dir(event);
    console.log(value, value.length);
       value.length
           ? (outputValue.textContent = value)
           : (outputValue.textContent = 'Anonymous');
  
}

inputValue.addEventListener('input', callback);

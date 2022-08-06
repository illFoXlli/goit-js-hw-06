// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


let inputValue = document.querySelector('#name-input');
let outIputValue = document.querySelector('#name-output');

// console.log(outputValue.textContent);

const callback = (   { currentTarget: { value } } ) => {
       value.length
           ? (outIputValue.textContent = value)
           : (outIputValue.textContent = 'Anonymous');
  
}

inputValue.addEventListener('input', callback);

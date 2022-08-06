// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

let form = document.querySelector('.login-form');
let inputEmail = document.querySelector("[type = 'email']");
let inputPassword = document.querySelector("[type = 'password']");
let btn = document.querySelector("[type = 'submit']");
console.log(form);
// что тут не правельно и как правельно диструкту... ???? Нужно уточнить!!!!!
form.addEventListener('submit', event => {
    event.preventDefault();
    // console.dir(event);
    // const { elements: { email, password } } = event.currentTarget
    // console.log( email, password );
    // console.log({ currentTarget: { 0: { input: { value } } } } );
    // console.log();
    // const {
    //     elements: { input1:{email}, input2:{password}, },
    // } = event.currentTarget;

   
    if (inputEmail.value === '' || inputPassword.value === '') {
        return alert('Введите что-нибудь... умное :)');
    } else {
        const obj = {
            email: inputEmail.value,
            password: inputPassword.value,
        };
    }
    event.target.reset();
});

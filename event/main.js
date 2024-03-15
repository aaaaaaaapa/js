// //1

// const alertBtn = document.querySelector('.alert-btn');
// alertBtn.addEventListener('click', () => {
//     alert('Привет Мир!');
// });

// //2

// const emailInp = document.getElementById('email-inp');
// const fillBtn = document.querySelector('.fill-btn');
// const cleanBtn = document.querySelector('.clean-btn');

// fillBtn.addEventListener('click', () => {
//     emailInp.value = 'test@email.ru';
// });

// cleanBtn.addEventListener('click', () => {
//     emailInp.value = '';
// });

// //3

// const alertInp = document.getElementById('alert-inp');
// const alertBtn2 = document.querySelector('#alert-btn');

// alertBtn2.addEventListener('click', () => {
//     if (alertInp.value) {
//         alert(`Вы ввели \"${alertInp.value}\".`);
//     }
//     else {
//         alert(`Вы ничего не ввели в поле.`);
//     }
//     alertInp.value = '';
// })

// //4

// const changeInp1 = document.getElementById('inp-1');
// const changeInp2 = document.getElementById('inp-2');
// const changeBtn = document.querySelector('.change-btn');

// changeBtn.addEventListener('click', () => {
//     const val1 = changeInp1.value;
//     const val2 = changeInp2.value;
//     changeInp1.value = val2;
//     changeInp2.value = val1;
// });

// //5 

// const disInp = document.getElementById('dis-inp');
// const disBtn = document.getElementById('dis-btn');
// const unlockBtn = document.getElementById('unlock-btn');

// disBtn.addEventListener('click', () => {
//     disInp.setAttribute('disabled', '');
//     disInp.setAttribute('placeholder', 'Заблокировано');
// });

// unlockBtn.addEventListener('click', () => {
//     disInp.removeAttribute('disabled');
//     disInp.setAttribute('placeholder', 'Разблокировано');
// });

//6

const square = document.querySelector('.square');
const sqBtn = document.querySelector('#sq-btn');


sqBtn.addEventListener('click', () => {
    if (square.style.display == 'none') {
        square.style.display = 'flex';
        sqBtn.textContent = 'Скрыть квадрат';
    }
    else {
        square.style.display = 'none';
        sqBtn.textContent = 'Показать квадрат';
    }
});

//7

const redSq = document.querySelector('.red-square');

redSq.onmouseover = () => {
    redSq.style.backgroundColor = 'rgb(65, 169, 0)';
};

redSq.onmouseout = () => {
    redSq.style.backgroundColor = 'rgb(252, 49, 49)';
};
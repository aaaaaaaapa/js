//1 

const timerText = document.querySelector('.timer-text');
const timerInp = document.querySelector('.timer-input');
const timerBtn = document.querySelector('.timer-btn');
let timerVal;
let interval;
let timeOut;

const setTimer = () => {
    if (timerInp.value < 0) {
        return alert('Введите положительное число');
    }
    timerText.innerText = timerInp.value;
    timerVal = timerInp.value;
    clearInterval(interval);
    interval = setInterval(timer, 1000);
}

const timer = () => {
    if (timerVal > 0) {
        timerVal--;
        timerText.innerText = timerVal;
    }
}


timerBtn.addEventListener('click', setTimer);

//2

let inp = document.querySelector('.inp');
let h2 = document.querySelector('.h2');

const setTimeOut = () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(setText, 300);
}

const setText = () => {
    h2.innerText = inp.value;
}

inp.oninput = setTimeOut;
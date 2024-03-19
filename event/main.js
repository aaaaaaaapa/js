//1

const alertBtn = document.querySelector('.alert-btn');
alertBtn.addEventListener('click', () => {
    alert('Привет Мир!');
});

//2

const emailInp = document.getElementById('email-inp');
const fillBtn = document.querySelector('.fill-btn');
const cleanBtn = document.querySelector('.clean-btn');

fillBtn.addEventListener('click', () => {
    emailInp.value = 'test@email.ru';
});

cleanBtn.addEventListener('click', () => {
    emailInp.value = '';
});

//3

const alertInp = document.getElementById('alert-inp');
const alertBtn2 = document.querySelector('#alert-btn');

alertBtn2.addEventListener('click', () => {
    if (alertInp.value) {
        alert(`Вы ввели \"${alertInp.value}\".`);
    }
    else {
        alert(`Вы ничего не ввели в поле.`);
    }
    alertInp.value = '';
})

//4

const changeInp1 = document.getElementById('inp-1');
const changeInp2 = document.getElementById('inp-2');
const changeBtn = document.querySelector('.change-btn');

changeBtn.addEventListener('click', () => {
    const val1 = changeInp1.value;
    const val2 = changeInp2.value;
    changeInp1.value = val2;
    changeInp2.value = val1;
});

//5 

const disInp = document.getElementById('dis-inp');
const disBtn = document.getElementById('dis-btn');
const unlockBtn = document.getElementById('unlock-btn');

disBtn.addEventListener('click', () => {
    disInp.setAttribute('disabled', '');
    disInp.setAttribute('placeholder', 'Заблокировано');
});

unlockBtn.addEventListener('click', () => {
    disInp.removeAttribute('disabled');
    disInp.setAttribute('placeholder', 'Разблокировано');
});

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
    redSq.style.backgroundColor = 'rgb(27, 221, 76)';
};

redSq.onmouseout = () => {
    redSq.style.backgroundColor = 'rgb(255, 75, 75)';
};

//8

const squares = document.querySelector('.squares');
const squareList = squares.querySelectorAll('.red-square');
let greenSq;

let changeColor = (elem) => {
    greenSq = squares.querySelector('.green-square');
    if (greenSq) {
        greenSq.classList.remove('green-square');
    }
    elem.classList.add('green-square');
};

squareList.forEach((element) => {
    element.style.cursor = 'pointer';
    element.onclick = () => changeColor(element);
});

//9

const displayText = document.querySelector('.res-text');
const historyText = document.querySelector('.res-hist');
const buttons = document.querySelectorAll('.calc-btn');

let corrResult;
let corrOper = '';

let cleanDisplay = (oper) => {

    switch (oper) {
        case 'C':
            displayText.textContent = '0';
            historyText.textContent = '';
            corrResult = 0;
            corrOper = '';
        case 'CE':
            displayText.textContent = '0';
            break;
        case '←':
            displayText.textContent = displayText.textContent.length > 1 ? 
            displayText.textContent.slice(0, -1) : '0';
            break;
    }

}

let calculateResult = (oper) => {

    switch (oper) {
        case '+':
            return corrResult + Number(displayText.textContent);
        case '-':
            console.log(corrResult - Number(displayText.textContent))
            return corrResult - Number(displayText.textContent);
        case '÷':
            return displayText.textContent === '0' ? 'Ошибка' : corrResult / Number(displayText.textContent);
        case '×':
            return corrResult * Number(displayText.textContent);
        case '':
            return Number(displayText.textContent);
    }

}

let selectOper = (oper) => {
    switch (oper) {
        case 'CE':
        case 'C':
        case '←':
            cleanDisplay(oper);
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            if (displayText.textContent == corrResult && corrOper !== oper) {
                historyText.textContent = `${historyText.textContent.slice(0, -2)} ${oper} `;
            }
            else {
                corrResult = calculateResult(corrOper);
                if (displayText.textContent !== 'Ошибка') {
                    historyText.textContent += `${displayText.textContent} ${oper} `;
                }
                displayText.textContent = String(corrResult);
            }
            corrOper = oper;
            break;
        case '=':
            corrResult = calculateResult(corrOper);
            displayText.textContent = String(corrResult);
            historyText.textContent = '';
            corrOper = '';
            break;
        case '±':
            displayText.textContent = -displayText.textContent;
            break;
        case '.':
            if (displayText.textContent.slice(-1) !== '.') {
                displayText.textContent += '.';
                break;
            }
    }
}

let addToDisplay = (num) => {
    if (displayText.textContent === '0' || corrOper !== '') {
        displayText.textContent = num;
    }
    else {
        displayText.textContent += num;
    }
}

buttons.forEach((elem) => {
    if (elem.classList.contains('oper')) {
        elem.onclick = () => selectOper(elem.textContent);
    }
    else {
        elem.onclick = () => addToDisplay(elem.textContent);
    }
})

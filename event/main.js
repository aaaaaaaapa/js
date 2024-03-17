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

let changeColor = (elem) => {
    if (squares.querySelector('.green-square')) {
        let greenSq = squares.querySelector('.green-square');
        greenSq.classList.toggle('green-square');
    }
    elem.classList.toggle('green-square');
};

squareList.forEach((element) => {
    element.style.cursor = 'pointer';
    element.onclick = () => changeColor(element);
});

//9

const resultText = document.querySelector('.res-text');
const historyText = document.querySelector('.res-hist');
const buttons = document.querySelectorAll('.calc-btn');

let corrResult;
let corrOper = '';

let selectOper = (oper) => {
    switch (oper) {
        case 'CE':
            resultText.textContent = '0';
            break;
        case 'C':
            resultText.textContent = '0';
            historyText.textContent = '';
            corrResult = 0;
            corrOper = '';
            break;
        case '←':
            if (resultText.textContent.length > 1) {
                resultText.textContent = resultText.textContent.slice(0, -1);
            }
            else {
                resultText.textContent = '0';
            }
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            corrResult = calculateResult(corrOper);
            corrOper = oper;
            if (resultText.textContent !== 'Ошибка') {
                historyText.textContent += `${resultText.textContent} ${oper} `;
            }
            resultText.textContent = '0';
            break;
        case '=':
            corrResult = calculateResult(corrOper);
            historyText.textContent = '';
            resultText.textContent = String(corrResult);
            corrOper = '';
            break;
        case '±':
            resultText.textContent = -resultText.textContent;
            break;
        case '.':
            if (resultText.textContent.slice(-1) !== '.') {
                resultText.textContent += '.';
                break;
            }
    }
}

let calculateResult = (oper) => {
    if (oper === '') {
        return Number(resultText.textContent);
    }
    else {
        switch (oper) {
            case '+':
                return corrResult + Number(resultText.textContent);
            case '-':
                return corrResult - Number(resultText.textContent);

            case '÷':
                if (resultText.textContent === '0') {
                    resultText.textContent = 'Ошибка';
                }
                else {
                    return corrResult /Number(resultText.textContent);
                }
            case '×':
                return corrResult * Number(resultText.textContent);
        }
    }
}

let addToDisplay = (num) => {
    if (resultText.textContent === '0') {
        resultText.textContent = num;
    }
    else {
        resultText.textContent += num;
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

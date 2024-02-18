// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. 
// Для этого используйте вспомогательную функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. 
// Если это так - пусть функция возвращает true, если не так - false.

let array1 = [4, 2, 65, -2, 0, 10, 5];

let isNumberInRange = (num) => {
    return num > 0 && num < 10;
}

let filterArray = (arr) => {
    let newArr = [];

    for (let num of arr) {
        if (isNumberInRange(num)) {
            newArr.push(num);
        }
    }
    return newArr;
}

// console.log(filterArray(array))


// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. 
// Для этого используйте вспомогательную функцию isEven (even - это четный), которая параметром принимает целое число и проверяет: 
// четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

let array2 = [1, 2, 3, 4, 5, 6];

let isEven = (num) => {
    return num % 2 === 0;
}

let newArray = (arr) => {
    let newArr = [];

    for (let num of arr) {
        if (isEven(num)) {
            newArr.push(num);
        }
    }

    return newArr;
}

// console.log(newArray(array2))


// 1. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние
// возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый).
// Например. 33 - зрелый

// 2. Создай новую функцию, в которую передаешь имя и возраст человека и
// получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызови
// внутри своей функции, функцию из прошлого задания


let ageCheck = (x) => {
    return x < 18 ? 'ребенок' : x < 30 ? 'молодой' : x < 55 ? 'зрелый' : 'старый';
}

let mess = (namee, age) => {
    return `${namee} имеет возраст ${age} и он ${ageCheck(age)}`;
}

// console.log(mess('Иван', 44));


// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и
// возраст ([{name: Иван, age: 23},...]) и возвращает массив, где каждый элемент представляет
// из себя строку Имя: Иван, возраст: 23.

let workers = [{name: 'Иван', age: 23}, {name: 'Петр', age: 41}];

let workWork = (arr) => {
    let newArr = [];
    for (elem of arr) {
        newArr.push(`Имя: ${elem['name']}, возраст: ${elem['age']}`)
    }
    return newArr
}
// console.log(workWork(workers));


// Напишите программу на JavaScript, которая принимает десять целых чисел как массив и отображает большее

let arr1239 = [23, 65, 2, 45, 7677, 23, 34, 65, 3, 10];

let maxElem = (arr) => {
    let max = arr[0];

    for (let elem of arr) {
        max = elem > max ? elem : max;
    }

    return `Самое большое число в массиве - ${max}`
} 

// console.log(maxElem(arr1239))


// Напишите программу на JavaScript, которая будет пробегать по числам от 0 до 15.
// Для каждого он будет проверять, является ли текущее число нечетным или четным, и отображать сообщение на экране

let evenOrOdd = (x) => {
    return x % 2 ? 'число нечетное' : x === 0 ? 'число является нулем' : 'число четное';
}

let run = (start, end) => {
    for (let i = start; i <= end; i++) {
        console.log(i, evenOrOdd(i))
    }
}

// run(0, 15)


// Напишите программу, которая принимает два массива, один с именами студентов, второй с одной оценкой, каждого студента
// Проверяйте, что бы массивы были одинаковыми по количеству элементов
// На выводе программа должна выдать среднюю оценку по студентам
// И оценку каждого студента буквой: <60 - F, <70 - D, <80 - C, <90 - B, <100 - A

let names = ['Ivan', 'Petr', 'Kirill'];
let assessments = [76, 21, 99];

let studentGrades = (arr1, arr2) => {
    let gpa = 0;
    if (arr1.length === arr2.length) {
        for (elem of assessments) {
            gpa += elem;
        }
        gpa = Math.floor(gpa / arr1.length);

        console.log(`средний балл по студентам - ${gpa}`);

        for (let i = 0; i < arr1.length; i++) {
            let ass = arr2[i] < 60 ? 'F' : arr2[i] < 70 ? 'D' : arr2[i] < 80 ? 'C' : arr2[i] < 90 ? 'B' : 'A';
            console.log(`${arr1[i]} - ${ass}`);
        }
    }
    else {
        console.log('Разная длина у массивов')
    }
}

// studentGrades(names, assessments);


// Написать программу принимающую строчку, внутри которой есть несколько записей вида $120, нужно вывести ВСЕ числа после доллара

let str = 'Есть несколько товаров по $120 и $20 и $70 все они крутые';

let numWithoutDollar = (str) => {
    let arr = str.split(' ');
    let answer = [];

    for (elem of arr) {
        if (elem[0] === '$') {
            answer.push(elem.slice(1));
        }
    }
    return answer
}

// console.log(numWithoutDollar(str));


// Очистить массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

let arr267 = [1, '', 'fdsf', undefined, 0, null, false];

let clean = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            arr.splice(i, 1);
            i--
        }
    }
    return arr
}

// console.log(clean(arr267))


// Напишите функцию, которая убирает повторяющиеся значения.

let arr45 = [23, 1, 23, 54, 2, 8, 2];

let withoutRepeat = (arr) => {
    let newArr = [];
    for (num of arr) {
        if (!(newArr.includes(num))) {
            newArr.push(num);
        }
    }
    return newArr;
}

console.log(withoutRepeat(arr45));
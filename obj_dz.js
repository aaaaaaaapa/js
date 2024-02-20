//Задание 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let createUser = () => {
    let user = {};
    user.name = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;
    return user;
}

// console.log(createUser())

// //Задание 2
// // Вывести зарплату Коли

let obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };

// console.log(obj['Коля']);

// //Задание 2.1
// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст и возвращает массив, где каждый элемент представляет из себя строку "Иван 23 года".

let users = [{name: "Иван", age: 30}, {name: "Дмитрий", age: 21}, {name: "Петр", age: 19}];

let createArr = (arr) => {
    let newArr = [];
    for (let item of arr) {
        newArr.push(`${item.name} ${item.age} лет`);
    }
    return newArr;
}

// console.log(createArr(users))

// //Задание 3
// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.
// Удалите из массива объектов, задание 3, объект с name == "Anna".

let user = [{
            name: "John",
            age: 30
        },
        {
            name: "Bob",
            age: 21
        },
        {
            name: "Anna",
            age: 19
        }
      ]

let pomogite = (arr) => {
    let obj1 = {};
    for (let item of arr) {
        if (item.name === "Bob") {
            obj1 = item;
        }
        if (item.name === "Anna") {
            arr.splice(arr.indexOf(item), 1);
        }
    }
    return obj1;
}

// console.log(pomogite(user));


// Задача 4
// Создать объект, свойствами которого будут 2 переменные и функция, которая выводит в консоль имя и фамилию из переменных
// Добавить свойство, значением которого будет функция, которая выводит сообщение в консоль 'My name ... '
// удалить первую функцию

let objj = {
            name: 'Ivan',
            surname: 'Almaz',

            showFullName() {
                console.log(this.name, this.surname);
            },

            showmyName() {
                console.log("My name", this.name, this.surname);
            }
        }     

delete objj.showFullName;
// console.log(objj);

//Задача 5
//Создать функцию, входными параметрами которой будут 2 числа. 
// Создайте объект calculator (калькулятор) с двумя свойствами, значениями которых будут входные параметры функции и с двумя методами:
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculate = (num1, num2) => {
    let calculator = {
        number1: num1,
        number2: num2,

        sum() {
            return this.number1 + this.number2;
        },

        mul() {
            return this.number1 + this.number2;
        }
    }
    return calculator;
}
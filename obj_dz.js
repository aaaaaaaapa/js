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

let user1 = [{
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

// console.log(pomogite(user1));


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

let calculate = (num1, num2, op) => {

    let calculator = {
        num1,
        num2,

        sum() {
            return this.num1 + this.num2;
        },

        mul() {
            return this.num1 * this.num2;
        }
    }

    return calculator[op]();
}

// console.log(calculate(2, 4, 'mul'));


//Задание 6
// У нас есть объект, в котором хранятся зарплаты нашей команды. 
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}    

let sumSalary = (obj) => {
    let sum = 0;
    for (key in obj) {
        sum += obj[key];
    }
    return sum;
}

// console.log(sumSalary(salaries))


//Задание 7
// У нас есть следующий объект.
// Проверьте программно, что этот объект не пустой и что в нем есть ключ age.

let user = {
    name: "John",
    age: 30
};

let check = (obj) => {
    console.log(Object.keys(obj).length ? 'Объект не пустой' : 'Объект пустой');
    console.log(obj.age ? 'В объекте есть ключ age' : 'В объекте нет ключа age');
}

// check(user)


//Задание 9
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

let multiplyNumeric = (obj) => {

    for (key in obj) {
        if (typeof(obj[key]) === 'number') {
            obj[key] *= 2;
        }
    }
    
}

multiplyNumeric(menu);
console.log(menu)

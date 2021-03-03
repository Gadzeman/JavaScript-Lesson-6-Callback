let users = [{
    name: 'vasya',
    age: 31,
    status: false
}, {
    name: 'petya',
    age: 30,
    status: true
}, {
    name: 'kolya',
    age: 29,
    status: true
}, {
    name: 'olya',
    age: 28,
    status: false
}, {
    name: 'max',
    age: 30,
    status: true
}, {
    name: 'anya',
    age: 31,
    status: false
}, {
    name: 'oleg',
    age: 28,
    status: false
}, {
    name: 'andrey',
    age: 29,
    status: true
}, {
    name: 'masha',
    age: 30,
    status: true
}, {
    name: 'olya',
    age: 31,
    status: false
}, {
    name: 'max',
    age: 31,
    status: true
}];

console.log("Виведемо юзерів, в яких статус true")

let arrTrue = []

for (const i of users) {
    if (i.status) {
        arrTrue.push(i)
    }
}

console.log(arrTrue)

console.log("Виведемо юзерів зі статусом false")

let arrFalse = []

for (const i of users) {
    if (!i.status) {
        arrFalse.push(i)
    }
}

console.log(arrFalse)

console.log("==============================================================================")

// .filter(function (user){умова, за якою user попаде до масиву}) ---> [отримуємо масив] 
// .filter((user) => user.умова)

users.filter(function (user) {
    console.log(user)
})


let filterResult = users.filter(function (user) {
    return user.status
})
console.log(filterResult)

let filtered = users.filter(user => !user.status);
console.log(filtered)

let namEs = users.filter(user => user.age < 30)
console.log(namEs)

console.log("==============================================================================")

// .forEach((value) => console.log(value))

users.forEach(user => console.log(user.name))

console.log("==============================================================================")

// .sort((a, b) => a.умова + b.умова)

console.log(users.sort((a, b) => a.age - b.age))

console.log("======================================or======================================")

console.log(users.sort(function (a, b) {
    return a.age - b.age
}))

console.log("==============================================================================")

// як використовувати їй разом:

users
    .filter((user) => user.status)
    .sort((a, b) => a.age - b.age)
    .forEach((user) => console.log(user))

console.log("==============================================================================")

// .map - проганяє кожен об'єкт із масиву через функцію, яка може змінувати його (об'єкт)
// .map((окремий об'єкт, індекс, сам масив){що робим з аргументами})

users.map((user, index, arr) => {
    console.log(user, index, arr)
})

users.map((user, index, arr) => {
    user.id = index
})

console.log("==============================================================================")

// some & every

let a = users.some((value) => value.age > 30)
console.log(a)

console.log("============================Different beetwen some and every=================================")
// Different beetwen some and every

let b = users.every((value) => value.age > 30)
console.log(b)

console.log("==============================================================================")

// callback

function calculator(a, b, callbackFn) {
    return callbackFn(a, b)
}

let result = calculator(10, 20, (a, b) => a + b)
console.log(result)

console.log("==============================================================================")

// prototype

Array.prototype.greeting = () => {
    console.log("hello")
}

users.greeting()

console.log("===================================Task=======================================")

// -- создать массив с 20 числами.

let numbers = [32, 12, 1, 44, 23, 76, 45, 66, 21, 90]

// -- при помощи метода sort и колбека  отсортировать массив.

console.log(numbers.sort((a, b) => a - b))

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

let r = numbers.sort((a, b) => b - a)
console.log(r)

// -- при помощи filter получить числа кратные 3

console.log(numbers.filter(num => num % 3 === 0))

// -- при помощи filter получить числа кратные 10

console.log(numbers.filter(num => num % 10 === 0))
console.log("==============================================================================")

// -- перебрать (проитерировать) массив при помощи foreach()

numbers.forEach(num => console.log(num))
console.log("==============================================================================")

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

console.log(numbers.map(num => num * 3))
console.log("==============================================================================")

// - создать массив со словами на 15-20 элементов.

let word = ["banana", "apple", "bluebarry", "graphefruit", "starberry", "mda", "frit"]

// -- отсортировать его по алфавиту в восходящем порядке.

let resultat = word.sort((a, b) => a.localeCompare(b))
console.log(resultat)
console.log("==============================================================================")

// -- отсортировать его по алфавиту  в нисходящем порядке.

let resultat2 = word.sort((a, b) => b.localeCompare(a))
console.log(resultat2)
console.log("==============================================================================")

// -- отфильтровать слова длиной менее 4х символов

console.log(word.filter(num => num.length <= 4))
console.log("==============================================================================")

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

console.log(word.map(wor => wor += "!"))
console.log("==============================================================================")

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false
// }, {
//     name: 'petya',
//     age: 30,
//     status: true
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {
//     name: 'olya',
//     age: 28,
//     status: false
// }, {
//     name: 'max',
//     age: 30,
//     status: true
// }, {
//     name: 'anya',
//     age: 31,
//     status: false
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true
// }, {
//     name: 'masha',
//     age: 30,
//     status: true
// }, {
//     name: 'olya',
//     age: 31,
//     status: false
// }, {
//     name: 'max',
//     age: 31,
//     status: true
// }];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

console.log(users.sort((a, b) => a.age - b.age))
// console.log(users.sort((a, b) => b.age - a.age))
console.log("==============================================================================")

// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

console.log(users.sort((a, b) => a.name.length - b.name.length))
console.log("==============================================================================")

// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let newUsers = []
users.map((user, index) => {
    user.id = index
    newUsers.push(user)
})
console.log(newUsers)
console.log("==============================================================================")

// -- наисать функцию калькулятора с 2мя числами и колбеком

function calc(a, b, callback){
    return callback(a, b)
}
console.log(calc(50, 100, (a, b) => a + b))
console.log("==============================================================================")

// -- наисать функцию калькулятора с 3мя числами и колбеком

function cal(a, b, c, callback){
    return callback(a, b, c)
}
let re = cal(50, 100, 500, (a, b, c) => a - b + c)
console.log(re)
console.log("==============================================================================")

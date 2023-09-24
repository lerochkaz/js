// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

function getMinNumberInArray(array){
    return Math.min(...array);
}

const arr = [1, 5, 7, 9];
console.log(getMinNumberInArray(arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function calculator(number){
    let counter=number;
    return {
        increment(){
            return ++counter;
        },
        decrement(){
            return --counter;
        }
    }
}

let calc=calculator(0);
console.log(calc.increment());
console.log(calc.decrement());
// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.


let getNumberOne = () => {
    let number = +prompt('Введите число');
    return number<=1 ? number : 'Введено число больше 1';
}


let getNumberTwo = () => {
    let number = +prompt('Введите число');
    return number>=3 ? number : 'Введено число меньше 3';
}

console.log(getNumberOne());
console.log(getNumberTwo());



// Задание 2
// Перепишите код к тернарному оператору


let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}

console.log( true===true ? '+++' : '---');



// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let random = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let getResultDecade=()=>{
//     const day = random(1,31);
//     console.log(`Сгенерировано число ${day}`);
//     return 0<day&&day<=10 ? 'Первая декада' : 10<day&&day<=20 ? 'Вторая декада' : 20<day&&day<=31 ? 'Третья декада' : 'Ошибка!';
// }

// console.log(getResultDecade());


// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

// Урок 6. Семинар. Знакомство с функциями в JavaScript
// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

let getStringNumber=(string)=>{
    return prompt(string);
}

let checkNumber=(string)=>{
    return Boolean(+string);
}

let cubing=(number)=>{
    let result=1;
    for(let i=0; i<3; i++){
        result=result*number;
    }
    return result;
}

let programCubing=()=>{
    let input=getStringNumber('Введите число: ');
    if(checkNumber(input)) return cubing(input);
    else return NaN;
}

console.log(programCubing())





// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст 
// "Размер заработной платы за вычетом налогов равен значение"

let getNetSalary=(salary, percentage=13)=>{
    return salary*(1-percentage/100);
}

let programGetNetSalary=()=>{
    let stringSalary=getStringNumber('Введите зароботную плату: ');
    if(checkNumber(stringSalary)) return getNetSalary(stringSalary);
    else return NaN;
}

console.log(`Размер заработной платы за вычетом налогов равен ${programGetNetSalary()} рублей`)





// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
// которая определяет максимальное значение среди этих чисел

let getArray=(string)=>{
    return string.split(' ');
}

let checkArray=(array)=>{
    let flag=true;
    for(let i=0; i<array.lenght; i++){
        if(checkNumber(array[i])) {
            flag=false;
            break;
        }
    }
    return flag
}

let changeArray=(checkingArray)=>{
    return (checkingArray.forEach((element) => Number.element))
}

let getMaxNumber=(arrayNumber)=> {
    return Math.max(...arrayNumber)
}

let programGetMaxNumber=()=>{
    let ArrayStringNumbers=getArray(getStringNumber('Введите числа через пробел: '));
    if(checkArray(ArrayStringNumbers)) return getMaxNumber(ArrayStringNumbers);
    else return NaN;
}

console.log(programGetMaxNumber());






// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа
//  и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
//  должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
//  Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
//  функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, 
//  проверки на NaN, Infinity делать не нужно.

let arrayTwoElement=(array)=>{
    let newArray = new Array();
    // if(array.lenght>0) {  // Почему данная проверка не работает?
        newArray.push(+array[0], +array[1]);
    // }
    return newArray;
}

let checkArrayForCalculator=(array)=>{
    if(checkArray(array)) array.sort((a, b) => {return b-a})
}

let calculator=(sign, array)=>{
    let result=undefined; 
    switch(sign) {
        case '+': 
            result=array[0]+array[1];
            break;
        case '-': 
            checkArrayForCalculator(array);
            result=array[0]-array[1];
            break;
        case '*': 
            result=array[0]*array[1];
            break;
        case '/': 
            result=array[0]/array[1];
            break;
    }
    return result;
}

let programCalculator=()=>{
    let someArray=arrayTwoElement(getArray(getStringNumber('Введите два числа: ')));
    if(checkArray(someArray)){
        return calculator(getStringNumber('Введите знак: '),someArray)
    } else {
        return NaN;
    }
}

console.log(programCalculator());
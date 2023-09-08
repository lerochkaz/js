// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const getResponse=(request)=>(prompt(request));

const checkNumber=(checkString)=>(Boolean(+checkString));

const printString=(stringNum)=>{
    for(let i=0; i<=(+stringNum); i++){
        if(i==0){
            console.log(`${i} - это ноль`);
        } else if (i%2==0){
            console.log(`${i} - четное число`);
        } else if (i%2==1){
            console.log(`${i} - нечетное число`);
        } else {
            console.log('Введенно отрицательное число')
        }
    }
}

function programPrintStringInFor() {
    const countString=getResponse('Какое колличество строк вы хотите вывести?')
    if(checkNumber(countString)){
        printString(countString);
    } else {
        console.log('Введенны некорректные данные')
    }
}

programPrintStringInFor();




// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// Вариант 1
const arrayFirst = [1, 2, 3, 4, 5, 6, 7];

arrayFirst.forEach(function(element, index) {
    if(element===4) arrayFirst.splice(index, 2);
});

console.log(arrayFirst);

// Вариант 2
const arraySecond = [1, 2, 3, 4, 5, 6, 7];

const filterArray = arraySecond.filter(function(element){
    return element!==4&&element!==5;
})

console.log(filterArray);





// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const generateArray=(length, max)=>(
    [...new Array(length)]
      .map(()=>Math.round(Math.random()*max))
);

function sumArray(array, len=(array.length-1), sum=0){
    sum+=array[len]
    if(len===0) return sum;
    else return sumArray(array, --len, sum)
}

const someArray=generateArray(5,10);
console.log(someArray);
console.log(sumArray(someArray));




// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

function printRow(count){
    let str='';
    for(i=0; i<=count; i++){
        console.log(str+='x');
    }
}

printRow(getResponse('Какое колличество строх хотите вывести?'))

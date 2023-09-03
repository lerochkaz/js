// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить
//  этой переменной значение из переменной name. Вывести значение переменной admin в консоль.

let questionTemperatureCelsius = () => +prompt('Введите температуру по Цельсию:');
let getTemperatureFahrenheit = questionTemperatureCelsius => (9 / 5) * questionTemperatureCelsius + 32;
let TemperatureCelsius = questionTemperatureCelsius();

console.log(`Температура в градусах Цельсия: ${TemperatureCelsius}, в градусах по Фаренгейту ${getTemperatureFahrenheit(TemperatureCelsius)}`);


const myName = 'Валерия';
let adminName = myName;

console.log(adminName);

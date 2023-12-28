// Напишите функцию для преобразования имени в инициалы. Эта ката состоит из двух слов с одним пробелом между ними.
// В результате должны быть две заглавные буквы с точкой, разделяющей их.
// Это должно выглядеть так:
// Sam Harris=>S.H
// patrick feeney=>P.F

function abbrevName(name){
    return  name.split(' ').map(char=> char[0].toUpperCase()).join('.')
}

const str = 'Sam Harris';
console.log(abbrevName(str));
// Я дам вам целое число. Верните мне фигуру такой же длины и ширины, как целое число. 
// Целое число будет целым числом от 1 до 50.
// n = 3, поэтому я ожидаю обратную сторону квадрата 3x3, как показано ниже, в виде строки:
// +++
// +++
// +++

function generateShape(n){
    const square = '+'.repeat(n) + '\n';
    return square.repeat(n)
}

console.log(generateShape(3));
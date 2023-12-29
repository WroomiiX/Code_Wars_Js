// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает "Even" для четных чисел
// или "Odd" для нечетных.

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

let num = 2;

console.log(evenOrOdd(num));
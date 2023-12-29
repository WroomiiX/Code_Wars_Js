// Завершите решение так, чтобы оно перевернуло переданную в него строку.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

const solution = (str) => str.split('').reverse().join('');
const str = 'world';
console.log(solution(str));


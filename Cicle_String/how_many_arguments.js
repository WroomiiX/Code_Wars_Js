//Напишите функцию, которая возвращает количество полученных аргументов.
// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

function args_count(...rest){
    return rest.length;
  }

console.log(args_count())// --> 0
console.log(args_count('a'))// --> 1
console.log(args_count('a', 'b'))// --> 2
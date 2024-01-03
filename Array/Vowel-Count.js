// Возвращает количество гласных в заданной строке.
// Мы будем считать a, e, i, гласными для этой Ката (но не o) .uy
// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
    return str.split('').filter(item=> 'aeiou'.includes(item)).length
  }

console.log(getCount("abracadabra"));
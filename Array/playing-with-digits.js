// Некоторые числа имеют забавные свойства. Например:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴ = 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Учитывая два положительных целых числа n и p, мы хотим найти положительное целое число k,
// если оно существует, такое, что сумма цифр, nвозведенных в последовательные степени, начиная с p, равна k * n.
// Другими словами, записывая последовательные цифры nas a, b, c, d ..., существует ли целое число kтакое, что:


function digPow(n, p){
  const digit = n.toString();

  const sum = digit.split('')
                    .reduce((acc, item, index) => acc + Math.pow(parseInt(item), p + index), 0);
  if(sum % n === 0){
    return sum / n;
  }else{
    return -1;
  }

  }

console.log(digPow(89, 1));
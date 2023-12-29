// Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки. 
// Вам дан один параметр — исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.

 function removeChar(str){   
    if(str.length < 2){
        return str;
    }
    let newStr = '';
    for(let i = 1; i < str.length - 1; i++){
        newStr += str[i]
    }
    return newStr
   };

const str = 'first';
console.log(removeChar(str));
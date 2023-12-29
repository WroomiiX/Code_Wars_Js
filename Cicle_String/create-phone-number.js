// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде
// номера телефона.
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(numbers){
    let phoneNumber = '';
    for(let i = 0; i < numbers.length; i++){
        if(i === 0){
            phoneNumber += '(';
        }else if(i === 3){
            phoneNumber += ') '
        }else if(i === 6){
            phoneNumber += '-'
        }
        phoneNumber += numbers[i]
    }
    return phoneNumber
}
//const createPhoneNumber = (num) => num.reduce((prev, item) => prev.replace('x', item) ,'(xxx) xxx-xxxx')
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(num));
// Просто, учитывая строку слов, верните длину самого короткого слова (слов).
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function findShort(s){
    const word = s.split(' ');
    return Math.min(...word.map(item => item.length))
}

let str = 'dfdf dfd fd';
console.log(findShort(str));
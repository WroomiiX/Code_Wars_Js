// Первое столетие охватывает от 1 года до 100 года включительно , второе столетие — от 101 года до 200 года включительно и т. д.
// Учитывая год, верните столетие, в котором он находится.
// Примеры
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    return Math.ceil(year/100)
  }
const year = 1601;
console.log(century(year));
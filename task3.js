// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let x = "Hello";
let result = x.split("").reverse().join("");
console.log(result);

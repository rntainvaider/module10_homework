// Просит ввести число
let value = prompt("Введите число");

// Преобразуем значение в число
let number = +value;

// Проверяем ялвляется ли значение числом
if (typeof number === "number" && !isNaN(number)) {
  // Проверяем число на чётность
  if (number % 2 === 0) {
    console.log(`Число ${number} является чётным`);
  } else {
    console.log(`Число ${number} не является чётным`);
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}

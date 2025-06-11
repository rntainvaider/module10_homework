// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, null, "!", [1, 2, 3, 4]];

function isNumberElement(element) {
  return typeof element === "number";
}

function numbersForParity(arrElements) {
  let evenNumbers = 0;
  let oddNumbers = 0;
  let zero = 0;

  for (let i = 0; i < arrElements.length; i++) {
    if (isNumberElement(arrElements[i])) {
      console.log(typeof arrElements[i]);
      if (arrElements[i] === 0) {
        zero++;
      } else if (arrElements[i] % 2 == 0) {
        evenNumbers++;
      } else {
        oddNumbers++;
      }
    }
  }
  return `Количество чётных чисел = ${evenNumbers}\nКоличество нечётных чисел = ${oddNumbers}\nКоличестно нулей = ${zero}`;
}

console.log(numbersForParity(arr));

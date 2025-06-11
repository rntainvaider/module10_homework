// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

arr = [1, 1, 1, 1];

function set_element(arr_elements, isEquel = true) {
  for (let i = 1; i < arr.length; i++) {
    if (arr_elements[i] !== arr_elements[0]) {
      isEquel = false;
      break;
    }
  }
  return isEquel;
}

console.log(set_element(arr));

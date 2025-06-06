// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let arr = [true, 123, 23323, false, [true, false], 'asdasdas'];

console.log(`Количество элементов в массиве = ${arr.length}`);

let countNum = 1;
for (let i = 0; i < arr.length; i++) {
    console.log(`${countNum} элемент состоит из - ${arr[i]}`);
    countNum += 1
};

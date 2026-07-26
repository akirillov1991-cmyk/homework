// 1 Задача

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

// 2 задача

// let number = +prompt('Введите число для вычисления факториала');
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
// factorial *= i;
// }
// console.log(`Факториал числа ${number} равен ${factorial}`);

// 3 задача

// let board = "";

// for (let i = 0; i < 8; i++) {
//   let row = "";
//   for (let j = 0; j < 8; j++) {
//     if ((i + j) % 2 === 0) {
//       row += " Ч";
//     } else {
//       row += " Б";
//     }
//   }
//   board += row + "\n";
// }
// console.log(board);

// Задача 1

const NUMBER = 10 % 2;
if (NUMBER === 0) {
  console.log("Четное число");
} else {
  console.log("Нечетное число");
}

// Задача 2

const AGE = 20;
let discount = AGE < 18 ? 10 : AGE >= 18 && AGE <= 65 ? 20 : 30;
console.log(`Возраст: ${AGE}, скидка: ${discount}%`);

switch (AGE) {
  case AGE < 18:
    discount = 10;
    break;
  case AGE >= 18 && AGE <= 65:
    discount = 20;
    break;
  case AGE > 65:
    discount = 30;
    break;
}
console.log(`Возраст: ${AGE}, скидка: ${discount}%`);

// Задача 3

const USERNAME = prompt("Введите имя");
const PASSWORD = prompt("Введите пароль");
if (
  USERNAME === "admin" ||
  (USERNAME === "user" && Number(PASSWORD) === 123456)
) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

// Задача 4

const WEIGHT = Number(prompt("Вес посылки"));
const TYPE = prompt("Тип доставки");
if (WEIGHT <= 0) {
  console.log("Некорректный вес посылки");
}
if (TYPE != "Стандарт" || TYPE != "Экспресс" || TYPE != "Премиум") {
  console.log("Неверный тип доставки");
}

let price = WEIGHT < 1 ? 5 : WEIGHT >= 1 && WEIGHT <= 5 ? 10 : 15;
console.log(`Вес посылки: ${WEIGHT}, стоимость: ${price}`);

let coefficient;
switch (TYPE) {
  case "Стандарт":
    coefficient = 1;
    break;
  case "Экспресс":
    coefficient = 1.5;
    break;
  case "Премиум":
    coefficient = 2;
    break;
}
let totalPrice = price * coefficient;
console.log(totalPrice);

alert(`Итоговая стоимость доставки: ${totalPrice}$`);

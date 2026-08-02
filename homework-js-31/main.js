// Задача 1

function calculateFinalPrice(basePrice, personalDiscount, tax) {
    
    const discountPrice = basePrice - personalDiscount;
    const finalPrice = discountPrice * (1 + tax);
    console.log(finalPrice);
}

calculateFinalPrice(100, 10, 0.2);
calculateFinalPrice(100, 10, 0);

// Задача 2

function checkAccess (userName, password) {
    if (userName === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

console.log(checkAccess("admin", "123456")); 
console.log(checkAccess("sdbzfdb", "124235")); 


// Задача 3

function getTimeOfDay (time) {
    if (time < 0 || time > 23) return "Некорректное время";

     if (time < 5) return "ночь";
     if (time < 11) return "утро";
     if (time < 17) return "день";
    return "вечер";
}

console.log(getTimeOfDay(3));
console.log(getTimeOfDay(8));
console.log(getTimeOfDay(14));
console.log(getTimeOfDay(21));
console.log(getTimeOfDay(55));


// Задача 4

function findFirstEven (start, end) {
    let min = Math.min(start, end);
    let max = Math.max(start, end);

        for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
    return "Четных чисел нет";
}

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));
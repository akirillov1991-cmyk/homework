"use strict";

// Задача 1

const users = [
  {
    name: "Alex",
    age: 24,
    isAdmin: false,
  },
  {
    name: "Bob",
    age: 13,
    isAdmin: false,
  },
  {
    name: "John",
    age: 31,
    isAdmin: true,
  },
  {
    name: "Jane",
    age: 20,
    isAdmin: false,
  },
];

((users[4] = {
  name: "Ann",
  age: 19,
  isAdmin: false,
}),
  (users[5] = {
    name: "Jack",
    age: 43,
    isAdmin: true,
  }));

console.log(users);

// Задача 2

function getUserAverageAge(users) {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum += users[i].age;
  }
  return sum / 6;
}

console.log(getUserAverageAge(users));

// Задача 3

// const users = [
//   {
//     name: "John",
//     age: 31,
//     isAdmin: true,
//   },
//   {
//     name: "Jack",
//     age: 43,
//     isAdmin: true,
//   },
// ];

// function getAllAdmins(users) {
//   const admins = [];

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].isAdmin === true) {
//       admins.push(users[i]);
//     }
//   }
//   return admins;
// }

// Задача 4


// function first(arr, n) {
//   if (n === undefined) {
//     return arr[0];
//   }

//   if (n === 0) {
//     return [];
//   }
  
//   const result = [];
  
//   for (let i = 0; i < n && i < arr.length; i++) {
//     result.push(arr[i]);
//   }
  
//   return result;
// }
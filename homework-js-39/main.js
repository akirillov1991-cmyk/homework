// Задача 1

let person = {
  name: "Александр",
  age: 35,
  isProgrammer: true,
};

console.log(person);

// Задача 2

function isEmpty(object) {
  for (let key in object) {
    if (object.property(key)) {
      return false;
    }
  }
  return true;
}

// Задача 3

let task = {
    title: "День",
    description: "Солнечно",
    isCompleted: true,
}

function cloneAndModifu(object, modifications) {
    return {...object, ...modifications};
}

let modifiedTask = cloneAndModifu(task, {
    title: "Ночь",
    isCompleted: false,
});

for (let property in modifiedTask) {
    console.log(`${property}: ${modifiedTask[property]}`);
}

// Задача 4


"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todos = document.querySelector(".todos");

function createTodoElement(text) {
const todo = document.createElement("li");
const todoText = document.createElement("div");
const todoActions = document.createElement("div");
const completeButton = document.createElement("button");
const deleteButton = document.createElement("button");

todo.className = "todo";
todoText.className = "todo-text";
todoActions.className = "todo-actions";
completeButton.className = "button-complete button";
deleteButton.className = "button-delete button";

todoText.textContent = text;
completeButton.innerHTML = '&#10004;'; 
deleteButton.innerHTML = '&#10006;';

todoActions.append(completeButton, deleteButton);
todo.append(todoText, todoActions);

completeButton.addEventListener("click", () => {
  todo.classList.toggle("completed");
});

deleteButton.addEventListener("click", () => {
  todo.remove();
});
return todo;

const todosList = document.querySelector(".todos");
todosList.append(createTodoElement("Задача 1"));
}

function handleCreateTodo(todos, text) {
  const newTodo = createTodo(todos, text);
  const todoElement = createTodoElement(text);
}


const todoForm = document.getElementById("todo-form");
const ul = document.getElementById("todo-list");
const todoValue = document.createElement("input");
const todoButton = document.createElement("button");

let toDos = [];

todoValue.placeholder = "Make your todo-list";
todoButton.innerText = "ADD";

todoForm.appendChild(todoValue);
todoForm.appendChild(todoButton);

function save() {
  localStorage.setItem("todo-list", JSON.stringify(toDos));
}

function onClickDelete(event) {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  save();
}

function addTodoList(event) {
  event.preventDefault();
  const AddedtoDo = todoValue.value;
  const AddedtoDoObj = {
    todo: AddedtoDo,
    id: Date.now(),
  };
  toDos.push(AddedtoDoObj);
  paintTodoList(AddedtoDoObj);
  save();
  todoValue.value = "";
}

function paintTodoList(AddedtoDo) {
  const li = document.createElement("li");
  li.id = AddedtoDo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = AddedtoDo.todo;
  btn.innerText = "DELETE";
  btn.addEventListener("click", onClickDelete);
  li.appendChild(span);
  li.appendChild(btn);
  ul.appendChild(li);
}

const savedToDos = localStorage.getItem("todo-list");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  toDos.forEach(paintTodoList);
}
todoForm.addEventListener("submit", addTodoList);

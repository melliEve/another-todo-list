//Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// functions
function addTodo(e) {
  // prevent form from submitting
  e.preventDefault();
  // Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // save to localStorage
  saveLocalTodos(todoInput.value);
  // check mark button
  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
  completeBtn.classList.add('complete-btn');
  todoDiv.appendChild(completeBtn);

  // check trash button
  const trashBtn = document.createElement('button');
  trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  trashBtn.classList.add('trash-btn');
  todoDiv.appendChild(trashBtn);

  // append to list
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target;

  // delete todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    // add animation
    todo.classList.add('fall');
    removeLocalTodo(todo)
    todo.addEventListener('transitioned', function () {
      todo.remove();
    })
  }

  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none'
        }
        break;
    };
  })
}

function saveLocalTodos(todo) {
  // check whats in localStorage
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
  // check whats in localStorage
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function (todo) {
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // check mark button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn);

    // check trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    // append to list
    todoList.appendChild(todoDiv);
  })
}

function removeLocalTodo(todo) {
  // check whats in localStorage
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}



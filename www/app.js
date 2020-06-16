// if (typeof define !== 'function') {
//   var define = require('amdefine')(module);
// }
// define(function (require) {
//   var dep = require('dependency');
//   //The value returned from the function is 
//   //used as the module export visible to Node. 
//   return function () { };
// });

// const router = express.Router();
// const router = require('../router/Router');
// const Route = require('./router/Route');

// import home from './views/home'
// import about from './views/about'
// import todoList from './views/todoList'

// const routes = [
//   new Route('home', '/', home),
//   new Route('about', '/about', about),
//   new Route('todoList', '/todo-list', todoList),
// ];

// router(routes)

//NAVBAR
// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');

//   burger.addEventListener('click', () => {
//     //toggle nav
//     nav.classList.toggle('nav-active')

//     //animate links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = ''
//       }
//       else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//       }
//     });
//     // burger animation
//     burger.classList.toggle('toggle');
//   });
// }
// navSlide();

// //SMOOTH SCROLL CODE
// const home = `<h1>Home page</h1>`;

// function smoothScroll(target, duration) {
//   var target = document.querySelector(target); //section2
//   var targetPosition = target.getBoundingClientRect().top; //elements relative posiion to the top of the screen
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     console.log(startTime);

//     var elapsedTime = currentTime - startTime;
//     console.log(elapsedTime);

//     var run = ease(elapsedTime, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (elapsedTime < duration) requestAnimationFrame(animation);
//     console.log('timeElapsed: ' + elapsedTime + ' duration: ' + duration);

//   }

//   // gizma.com/easing
//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }



//   requestAnimationFrame(animation);
// }

// var section1 = document.querySelector('.section1');
// section1.addEventListener('click', function () {
//   smoothScroll('.section2', 1000);
// })

// var section2 = document.querySelector('.section2');
// section2.addEventListener('click', function () {
//   smoothScroll('.section1', 1000);
// })


// // TODO LIST

// //Selectors
// const todoInput = document.querySelector(".todo-input");
// const todoBtn = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// //Event listeners
// document.addEventListener('DOMContentLoaded', getTodos);
// todoBtn.addEventListener('click', addTodo);
// todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterTodo);

// // functions
// function addTodo(e) {
//   // prevent form from submitting
//   e.preventDefault();
//   // Todo DIV
//   const todoDiv = document.createElement('div');
//   todoDiv.classList.add('todo');
//   // create li
//   const newTodo = document.createElement('li');
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add('todo-item');
//   todoDiv.appendChild(newTodo);
//   // save to localStorage
//   saveLocalTodos(todoInput.value);
//   // check mark button
//   const completeBtn = document.createElement('button');
//   completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
//   completeBtn.classList.add('complete-btn');
//   todoDiv.appendChild(completeBtn);

//   // check trash button
//   const trashBtn = document.createElement('button');
//   trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
//   trashBtn.classList.add('trash-btn');
//   todoDiv.appendChild(trashBtn);

//   // append to list
//   todoList.appendChild(todoDiv);
//   // clear todo input value
//   todoInput.value = '';
// }

// function deleteCheck(e) {
//   const item = e.target;

//   // delete todo
//   if (item.classList[0] === 'trash-btn') {
//     const todo = item.parentElement;
//     // add animation
//     todo.classList.add('fall');
//     removeLocalTodo(todo)
//     todo.addEventListener('transitioned', function () {
//       todo.remove();
//     })
//   }

//   if (item.classList[0] === 'complete-btn') {
//     const todo = item.parentElement;
//     todo.classList.toggle('completed');
//   }
// }

// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case 'all':
//         todo.style.display = 'flex';
//         break;
//       case 'completed':
//         if (todo.classList.contains('completed')) {
//           todo.style.display = 'flex';
//         } else {
//           todo.style.display = 'none';
//         }
//         break;
//       case 'uncompleted':
//         if (!todo.classList.contains('completed')) {
//           todo.style.display = 'flex';
//         } else {
//           todo.style.display = 'none'
//         }
//         break;
//     };
//   })
// }

// function saveLocalTodos(todo) {
//   // check whats in localStorage
//   let todos;
//   if (localStorage.getItem('todos') === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }

//   todos.push(todo);
//   localStorage.setItem('todos', JSON.stringify(todos))
// }

// function getTodos() {
//   // check whats in localStorage
//   let todos;
//   if (localStorage.getItem('todos') === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }
//   todos.forEach(function (todo) {
//     // Todo DIV
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');

//     // create li
//     const newTodo = document.createElement('li');
//     newTodo.innerText = todo;
//     newTodo.classList.add('todo-item');
//     todoDiv.appendChild(newTodo);

//     // check mark button
//     const completeBtn = document.createElement('button');
//     completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
//     completeBtn.classList.add('complete-btn');
//     todoDiv.appendChild(completeBtn);

//     // check trash button
//     const trashBtn = document.createElement('button');
//     trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
//     trashBtn.classList.add('trash-btn');
//     todoDiv.appendChild(trashBtn);

//     // append to list
//     todoList.appendChild(todoDiv);
//   })
// }

// function removeLocalTodo(todo) {
//   // check whats in localStorage
//   let todos;
//   if (localStorage.getItem('todos') === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }
//   const todoIndex = todo.children[0].innerText;
//   todos.splice(todos.indexOf(todoIndex), 1);
//   localStorage.setItem('todos', JSON.stringify(todos));
// }



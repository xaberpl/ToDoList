const form = document.querySelector("form");
const input = document.querySelector("input.asd");
const taskList = document.querySelector("ul.allTasks");
const addButton = document.querySelector("button.addButton");
const searchList = document.querySelector("ul.searchList");
const inputSearch = document.querySelector("input.searchInput");
const liElements = document.getElementsByClassName("task");
const taskNumber = document.querySelector("h1 span");
const deleteButtons = document.getElementsByClassName("deleteButton");

let tasks = [];
let tasks2 = [];

let count = 0;

const renderTasks = () => {
  taskList.textContent = "";
  tasks.forEach((item, index) => {
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML =
      item + `<button class="deleteButton" data-key=${index}>Delete</button>`;
    taskList.appendChild(task);
    input.value = "";
  });
  Array.from(deleteButtons).forEach((button) => {
    button.addEventListener("click", removeTask);
  });
};

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask == "") {
    return;
  }
  tasks.push(titleTask);
  count++;
  renderTasks();
  console.log(tasks);
};
addButton.addEventListener("click", addTask);

const searchTask = (e) => {
  searchList.textContent = "";
  renderTasks();
  let searchText = e.target.value;
  if (searchText == "") {
    searchList.textContent = "";
    return;
  }
  let tasks2 = [...liElements];
  let tasks3 = tasks2.filter((li) => li.textContent.includes(searchText));
  console.log(tasks3);
  searchList.textContent = "";
  tasks3.forEach((li) => searchList.appendChild(li.cloneNode(true)));
};

inputSearch.addEventListener("input", searchTask);
const removeTask = (e) => {
  const index = e.target.dataset.key;
  console.log(index);
  tasks.splice(index, 1);
  renderTasks();
};

const form = document.querySelector("form");
const input = document.querySelector("input.asd");
const taskList = document.querySelector("ul.allTasks");
const addButton = document.querySelector("button.addButton");
const searchList = document.querySelector("ul.searchList");
const inputSearch = document.querySelector("input.searchInput");
const liElements = document.getElementsByClassName("task");

let tasks = [];
let tasks2 = [];

const renderTasks = () => {
  taskList.textContent = "";
  tasks.forEach((item) => {
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = item + "<button>Delete</button>";
    taskList.appendChild(task);
    input.value = "";
  });
};

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask == "") {
    return;
  }
  tasks.push(titleTask);
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
  //tasks3.forEach((li) => searchList.appendChild(li));
  tasks3.forEach((li) => searchList.appendChild(li.cloneNode(true)));
};

inputSearch.addEventListener("input", searchTask);

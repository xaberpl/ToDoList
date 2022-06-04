const form = document.querySelector("form");
const input = document.querySelector("input.asd");
const taskList = document.querySelector("ul.allTasks");
const addButton = document.querySelector("button.addButton");
const searchList = document.querySelector("ul.searchList");
const inputSearch = document.querySelector("input.searchInput");
const liElements = document.getElementsByClassName("task");

const tasks = [];
let tasks2 = [];

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask == "") {
    return;
  }
  tasks.push(titleTask);
  taskList.textContent = "";
  tasks.forEach((item) => {
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = item + "<button>Delete</button>";
    taskList.appendChild(task);
    input.value = "";
  });
  console.log(tasks);
};
addButton.addEventListener("click", addTask);

const searchTask = (e) => {
  let searchText = e.target.value;
  let tasks3 = [...liElements];
  // console.log(tasks3);
  tasks3 = tasks3.filter((li) => li.textContent.includes(searchText));
  console.log(tasks3);
  searchList.textContent = "";
  tasks3.forEach((li) => searchList.appendChild(li));
};

inputSearch.addEventListener("input", searchTask);

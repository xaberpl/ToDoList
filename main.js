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

let count = 0;

//RENDER FUNCTION, GENERATES ALL TASKS IM MAIN UL
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

  //CONVERTING HTML COLLECTION -> ARRAY (TO USE FOREACH)
  Array.from(deleteButtons).forEach((button) => {
    button.addEventListener("click", removeTask);
  });
};

//ADD TASK FUNCTION
const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask == "") {
    return;
  }
  //PUSH NEW TASK TO ARRAY
  tasks.push(titleTask);
  count++;
  //RENDER TASKS ALL THE TASKS
  renderTasks();
};
addButton.addEventListener("click", addTask);

//SEARCH TASK FUNCTION
const searchTask = (e) => {
  searchList.textContent = "";
  let searchText = e.target.value;
  if (searchText == "") {
    searchList.textContent = "";
    return;
  }
  //ARRAY CONTAINING ALL TASKS
  let arr = [...liElements];
  //FILTERING SEARCHED TASKS
  arr = arr.filter((li) => li.textContent.includes(searchText));
  searchList.textContent = "";
  //CLONE SEARCHED TASKS TO THE SECOND UL
  arr.forEach((li) => searchList.appendChild(li.cloneNode(true)));
};
//SET EVENT LISTENER TO SEARCH INPUT
inputSearch.addEventListener("input", searchTask);
//REMOVE TASK FUNCTION
const removeTask = (e) => {
  const index = e.target.dataset.key;
  console.log(index);
  //REMOVING ELEMENT FROM ARRAY BY INDEX
  tasks.splice(index, 1);
  //RENDERING TASKS
  renderTasks();
};

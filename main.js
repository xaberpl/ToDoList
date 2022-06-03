const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const addButton = document.querySelector("button.addButton");

const tasks = [];

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask == "") {
    return;
  }
  tasks.push(titleTask);
  ul.textContent = "";
  input.value = "";
  tasks.forEach((item) => {
    const task = document.createElement("li");
    task.innerHTML = item + "<button>Delete</button>";
    ul.appendChild(task);
  });
};
addButton.addEventListener("click", addTask);

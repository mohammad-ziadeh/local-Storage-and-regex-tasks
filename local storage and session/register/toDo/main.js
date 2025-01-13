const taskInput = document.getElementById("taskinput");
const addBtn = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");
const delAll = document.getElementById("delAll");
const allChecked = document.getElementById("checkAll");
const h = document.getElementById("heading");

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addBtn.click();
  }
});

addBtn.addEventListener("click", () => {
  addTask();
  delAll.disabled = false;
});

delAll.addEventListener("click", () => {
  delchecked();
});

allChecked.addEventListener("click", () => {
  AllChecked();
});

function delchecked() {
  const tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    const taskCheckBox = task.querySelector("input[type=checkbox]");
    if (taskCheckBox.checked) {
      task.remove();
    }
  });
}

function AllChecked() {
  const tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    const taskCheckBox = task.querySelector("input[type=checkbox]");
    taskCheckBox.checked = true;
  });
}

function addTask() {
  const inputTask = taskInput.value;

  if (inputTask === "") {
    let Msg = [
      "It's empty ಠ╭╮ಠ",
      "Please enter something (´・ω・`)",
      "So... No tasks? (･ัω･ั)?",
      "I'm watching IT'S STILL EMPTY ಠ╭╮ಠ",
      "Ok just ignore me like everyone T-T",
      "Still nothing >-<",
    ];
    window.alert(Msg[Math.floor(Math.random() * Msg.length)]);
    return;
  }

  const newInputSpan = document.createElement("input");
  const listItem = document.createElement("li");
  const inputSpan = document.createElement("span");
  const completedBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const check = document.createElement("input");

  completedBtn.addEventListener("click", () => {
    toggleComplete(inputSpan);
  });

  editBtn.addEventListener("click", () => {
    inputSpan.innerHTML = newInputSpan;
    listItem.removeChild(inputSpan);
    listItem.appendChild(newInputSpan);
  });

  newInputSpan.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      listItem.removeChild(newInputSpan);
      listItem.appendChild(inputSpan);
      inputSpan.innerText = newInputSpan.value;
    }
  });

  deleteBtn.addEventListener("click", () => {
    deleteTask(listItem);
  });

  newInputSpan.value = inputTask;
  completedBtn.classList.add("btn");
  completedBtn.classList.add("btn-success");

  inputSpan.classList.add("inputSpan");

  newInputSpan.classList.add("newInput");

  editBtn.classList.add("btn");
  editBtn.classList.add("btn-warning");
  editBtn.style.color = "white";

  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-danger");

  listItem.classList.add("mb-4");

  inputSpan.innerText = inputTask;
  completedBtn.innerText = "complete";
  deleteBtn.innerText = "delete";
  editBtn.innerText = "edit";

  check.type = "checkbox";
  check.classList.add("check");

  listItem.appendChild(inputSpan);
  listItem.appendChild(check);
  listItem.appendChild(completedBtn);
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);

  taskList.appendChild(listItem);

  taskInput.value = "";
}

function toggleComplete(task) {
  task.classList.toggle("completed");
}

function displayName() {
  let savedEmail = localStorage.getItem("email");
  if (savedEmail) {
    let Name = savedEmail.split("@")[0];
    h.innerText = "Welcome " + Name;
  }
}
window.onload = displayName;

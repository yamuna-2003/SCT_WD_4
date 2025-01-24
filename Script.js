document.getElementById("add-btn").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const taskTimeInput = document.getElementById("task-time");
  const taskList = document.getElementById("task-list");

  const taskName = taskInput.value.trim();
  const taskTime = taskTimeInput.value;

  if (taskName === "" || taskTime === "") {
    alert("Please enter both task and time!");
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const taskDetails = document.createElement("div");
  taskDetails.classList.add("task-details");

  const taskNameEl = document.createElement("span");
  taskNameEl.classList.add("task-name");
  taskNameEl.textContent = taskName;

  const taskTimeEl = document.createElement("span");
  taskTimeEl.classList.add("task-time");
  taskTimeEl.textContent = `Scheduled for: ${new Date(taskTime).toLocaleString()}`;

  taskDetails.appendChild(taskNameEl);
  taskDetails.appendChild(taskTimeEl);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "&#x1F5D1;";

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskDetails);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  taskInput.value = "";
  taskTimeInput.value = "";
});

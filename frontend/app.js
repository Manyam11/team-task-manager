const API = "https://team-task-manager-production-7dd4.up.railway.app/api/tasks";

async function loadTasks() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title + " - " + task.status;
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById("task");
  const title = input.value;

  if (!title) return alert("Enter task");

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title })
  });

  input.value = "";
  loadTasks();
}

loadTasks();
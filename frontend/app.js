const API = "http://localhost:5000/api/tasks";

async function addTask() {
  const title = document.getElementById("task").value;

  await fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ title })
  });

  loadTasks();
}

async function loadTasks() {
  const res = await fetch(API);
  const data = await res.json();

  document.getElementById("list").innerHTML =
    data.map(t => `<li>${t.title}</li>`).join("");
}

loadTasks();
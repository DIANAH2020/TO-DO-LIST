// Selectors
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

// Functions
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
}

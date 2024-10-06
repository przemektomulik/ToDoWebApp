document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    if (task) {
        addTask(task);
        taskInput.value = ''; // Clear the input field
    }
});

function addTask(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

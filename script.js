// Load tasks from local storage when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadTasks);

// Add a new task when the "Add Task" button is clicked
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput'); // Get the input field element
    const task = taskInput.value.trim(); // Get the input value and remove extra whitespace

    if (task) { // If the task is not empty
        addTask(task); // Add the task to the list
        saveTask(task); // Save the task to local storage
        taskInput.value = ''; // Clear the input field
    }
});

// Function to add a new task to the task list on the page
function addTask(task) {
    const taskList = document.getElementById('taskList'); // Get the task list element
    const li = document.createElement('li'); // Create a new list item (li) element

    li.textContent = task; // Set the text of the list item to the task

    // Create a delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'; // Set the button text to "Delete"
    
    // Add an event listener to the delete button to remove the task when clicked
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li); // Remove the task from the task list in the DOM
        deleteTask(task); // Delete the task from local storage
    });

    li.appendChild(deleteButton); // Append the delete button to the list item
    taskList.appendChild(li); // Append the list item to the task list
}

// Function to save a task to local storage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get the existing tasks from local storage or initialize an empty array if none exist
    tasks.push(task); // Add the new task to the array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated tasks array back to local storage
}

// Function to load tasks from local storage when the page is loaded
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get the tasks from local storage or initialize an empty array if none exist
    tasks.forEach(task => addTask(task)); // Add each task to the task list using the addTask function
}

// Function to delete a task from local storage
function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get the existing tasks from local storage
    tasks = tasks.filter(t => t !== task); // Filter out the task to be deleted
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated tasks array back to local storage
}

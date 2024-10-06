// Add an event listener to the "Add Task" button to add a new task when clicked
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput'); // Get the input field element
    const task = taskInput.value; // Get the value entered in the input field

    if (task) { // Check if the input field is not empty
        addTask(task); // Call the addTask function to add the task to the list
        taskInput.value = ''; // Clear the input field after adding the task
    }
});

// Function to add a new task to the task list
function addTask(task) {
    const taskList = document.getElementById('taskList'); // Get the task list element (ul or ol)
    const li = document.createElement('li'); // Create a new list item (li) element

    li.textContent = task; // Set the text of the list item to the task value

    const deleteButton = document.createElement('button'); // Create a new delete button element
    deleteButton.textContent = 'Delete'; // Set the button text to "Delete"
    
    // Add an event listener to the delete button to remove the task from the list when clicked
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li); // Remove the list item from the task list
    });

    li.appendChild(deleteButton); // Append the delete button to the list item
    taskList.appendChild(li); // Append the list item (with the delete button) to the task list
}

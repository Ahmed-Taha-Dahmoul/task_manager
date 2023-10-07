const taskListElement = document.getElementById('task-list');
const taskModal = document.getElementById('task-modal'); // Add this line to define taskModal

// Function to fetch and display tasks
function fetchAndDisplayTasks() {
    fetch('/api/tasks/') // Adjust the URL to your DRF API endpoint
        .then(response => response.json())
        .then(data => {
            // Clear the current task list
            taskListElement.innerHTML = '';

            // Display each task
            data.forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.textContent = task.title;
                taskListElement.appendChild(taskItem);
            });
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
        });
}

// Fetch and display tasks when the page loads
fetchAndDisplayTasks();

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;

    const taskData = {
        title: taskTitle,
        description: taskDescription,
    };

    // Send a POST request to create the task
    fetch('/api/tasks/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data if needed
        console.log('Task created:', data);
        // Close the modal
        taskModal.style.display = 'none'; // Close the modal after creating a task

        // Fetch and display updated task list after creating a new task
        fetchAndDisplayTasks();
    })
    .catch(error => {
        console.error('Error creating task:', error);
    });
});


const taskModal = document.getElementById('task-modal'); // Add this line to define taskModal


const taskListElement = document.getElementById('task-list');
const taskDetailModal = document.getElementById('task-detail-modal');
const closeDetailModalButton = document.getElementById('close-detail-modal');
const taskDetailTitleElement = document.getElementById('task-detail-title');
const taskDetailDescriptionElement = document.getElementById('task-detail-description');

// Function to create a task item element with click functionality
function createTaskItem(task) {
    const taskItem = document.createElement('li');
    const taskButton = document.createElement('button');

    taskButton.textContent = task.title;
    taskButton.classList.add('task-button');

    taskButton.addEventListener('click', function() {
        // When a task title button is clicked, display a pop-up with title and description
        taskDetailTitleElement.textContent = task.title;
        taskDetailDescriptionElement.textContent = task.description;

        taskDetailModal.style.display = 'block';
        taskDetailModal.classList.add('animate-fade-in');
    });

    taskItem.appendChild(taskButton);

    return taskItem;
}

// Function to fetch and display tasks
function fetchAndDisplayTasks() {
    fetch('/api/tasks/') // Adjust the URL to your DRF API endpoint
        .then(response => response.json())
        .then(data => {
            // Clear the current task list
            taskListElement.innerHTML = '';

            // Display each task using createTaskItem function
            data.forEach(task => {
                const taskItem = createTaskItem(task);
                taskListElement.appendChild(taskItem);
            });
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
        });
}

// Close the task detail modal when the close button is clicked
closeDetailModalButton.addEventListener('click', function() {
    taskDetailModal.style.display = 'none';
});

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

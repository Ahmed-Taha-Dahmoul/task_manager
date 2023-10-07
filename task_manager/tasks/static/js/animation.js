document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-btn');
    const taskModal = document.getElementById('task-modal');
    const closeModalButton = document.getElementById('close-modal');
    const taskForm = document.getElementById('task-form');
    const localTimeElement = document.getElementById('local-time');

    // Function to update the local time
    function updateLocalTime() {
        const currentTime = new Date();
        const options = { timeZoneName: 'short' };
        localTimeElement.textContent = `Local Time: ${currentTime.toLocaleTimeString([], options)}`;
    }

    // Update the local time initially
    updateLocalTime();

    // Update the local time every second
    setInterval(updateLocalTime, 1000);

    // Show the modal when the "Add Task" button is clicked
    addTaskButton.addEventListener('click', function() {
        taskModal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', function() {
        taskModal.style.display = 'none';
    });

    // Close the modal when the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === taskModal) {
            taskModal.style.display = 'none';
        }
    });

    // Handle the form submission (you can add your own logic here)
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskTitle = document.getElementById('task-title').value;
        const taskDescription = document.getElementById('task-description').value;

        // You can perform further actions here, like saving the task to your data structure.
        // For this example, we'll just close the modal.
        taskModal.style.display = 'none';
    });
});

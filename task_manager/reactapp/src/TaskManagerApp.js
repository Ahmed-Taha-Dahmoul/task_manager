// src/TaskManagerApp.js

import React, { Component } from 'react';

class TaskManagerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // Initialize an empty array to hold tasks
    };
  }

  // Add methods and event handlers here

  render() {
    return (
      <div>
        <header>
          <h1>Task Manager</h1>
          <p id="local-time"></p>
        </header>
        <main>
          <button id="add-task-btn">Add Task</button>
        </main>
        <ul id="task-list">
          {this.state.tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskManagerApp;

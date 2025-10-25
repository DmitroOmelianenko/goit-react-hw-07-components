import React from "react";
import "./TaskList.css";

export class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Зробити домашнє завдання" },
    { id: 3, text: "Перевірити код" },
  ];

  updateList = () => {
    this.forceUpdate();
  };

  addTask = () => {
    const input = document.getElementById("newTask");
    const text = input.value.trim();
    if (text) {
      const newTask = { id: Date.now(), text };
      TaskList.tasks.push(newTask);
      input.value = "";
      this.updateList();
    }
  };

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.updateList();
  };

  render() {
    return (
      <div className="task-container">
        <h2>Список завдань</h2>
        <div className="input-group">
          <input id="newTask" type="text" placeholder="Нове завдання..." />
          <button onClick={this.addTask}>Додати</button>
        </div>
        <ul className="task-list">
          {TaskList.tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button className="delete" onClick={() => this.deleteTask(task.id)}>
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

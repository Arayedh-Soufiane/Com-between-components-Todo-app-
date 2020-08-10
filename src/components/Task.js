import React from "react";
import EditModal from "./EditModal";

const Task = ({ task, removeTodo, editTodo }) => {
  // task : { text : "todo" , id : ""}
  return (
    <li className="todo-card">
      <span className="todo-text">{task.text} </span>
      <button className="my-btn btn-danger" onClick={() => removeTodo(task.id)}>
        Delete
      </button>
      <EditModal
        editTodo={editTodo}
        oldText={task.text}
        idOfTheTodo={task.id}
      />
    </li>
  );
};

export default Task;

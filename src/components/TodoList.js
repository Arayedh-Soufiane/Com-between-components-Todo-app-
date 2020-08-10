import React from "react";
import Task from "./Task";

const TodoList = ({ todoList, removeTodo, editTodo ,  }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <Task
          key={todo.id}
          task={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

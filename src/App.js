import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "My First todo", id: 0 },
    { text: "My Second todo", id: 1 },
    { text: "My third todo", id: 2 },
  ]);

  // add Todo
  const addTodo = (text) => {
    const newTodo = {
      text: text,
      id: todos.length,
    };
    setTodos([...todos, newTodo]);
  };

  //Delete Todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //edit todo
  const editTodo = (_ID, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === _ID ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList todoList={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [inputValue, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      return alert("Enter a valid Task");
    }
    addTodo(inputValue);
    setInput("");
  };

  return (
    <form className="add-todo-form">
      <h1>Todo-App</h1>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={inputValue}
        />
        <button onClick={handleSubmit} className="my-btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;

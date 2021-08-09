import React from "react";
import "../App.css";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          <Todo />
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

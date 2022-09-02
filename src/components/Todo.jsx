import { useState } from "react";

const Todo = ({ todo, deleteTodo, finishTodo }) => {
  return (
    <div className="todo">
      <p className={`todo-text ${todo.finished ? "finished" : ""}`}>
        {todo.text}
      </p>
      <div className="controls">
        <div
          className="control edit"
          onClick={() => {
            finishTodo(todo.id);
          }}
        >
          Finalizar
        </div>
        <div
          className="control delete"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};
export default Todo;

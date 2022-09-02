import { useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
import Todo from "./Todo";
import "./Todo.css";

const TodosContainer = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", []);

  const agregarTodo = () => {
    const parsedValue = value.trim();

    if (parsedValue === "") return;
    if (todos.find((todo) => todo.text === parsedValue)) return;
    const newTodo = {
      text: value,
      id: todos.length + 1,
      finished: false,
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };

  const finishTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, finished: true };
        }
        return todo;
      })
    );
  };

  const eliminarTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <div className="container">
      <form className="imputGroup">
        <input
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
          type="text"
          placeholder="Ingresar nueva tarea"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            agregarTodo();
          }}
        >
          Agregar
        </button>
      </form>
      <div className="todos">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              deleteTodo={eliminarTodo}
              finishTodo={finishTodo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TodosContainer;

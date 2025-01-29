import { useRef, useState } from "react";
import TodosItem from "../components/TodosItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [errorText, setErrorText] = useState("");
  const input = useRef(null);

  function addTask() {
    let task = input.current.value;
    if (task.trim().length === 0) {
      setErrorText("Empty task is not allowed!");
      input.current.value = "";
      return;
    }
    if (task.trim().length < 3) {
      setErrorText("Task must be more than 3 characters!");
      input.current.value = "";
      return;
    }
    setErrorText("");
    setTodos([
      ...todos,
      {
        title: task.trim(),
        isDone: false,
        id: new Date().getTime(),
      },
    ]);
    input.current.value = "";
  }
  function removeTask(id) {
    const newTodos = todos.filter(function (item) {
      return item.id !== id;
    });
    setTodos(newTodos);
  }
  function doneTask(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTask();
      // input.current.value = "";
    }
  }
  return (
    <>
      <div className="background__circle"></div>
      <div className="board__frame">
        <div className="board__content">
          <h1>My ToDo List</h1>
          <div className="item" id="taskForm">
            <div className="checkbox"></div>
            <input
              type="text"
              name="todoInput"
              id="todoInput"
              ref={input}
              onKeyDown={handleKeyDown}
            />
            <button id="addBtn" onClick={addTask}>
              +
            </button>
          </div>
          <p id="error">{errorText}</p>
          <TodosItem data={todos} removeTask={removeTask} doneTask={doneTask} />

          <div className="clip__top">
            <div className="clip__hole"></div>
          </div>
          <div className="clip">
            <div className="clip__border-top"></div>
          </div>
        </div>
      </div>
    </>
  );
}

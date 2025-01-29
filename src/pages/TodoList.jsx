import TodosItems from "../components/TodosItems";

export default function TodoList() {
  return (
    <>
      <div className="background__circle"></div>
      <div className="board__frame">
        <div className="board__content">
          <h1>My ToDo List</h1>
          <div className="item" id="taskForm">
            <div className="checkbox"></div>
            <input type="text" name="todoInput" id="todoInput" />
            <button id="addBtn">+</button>
          </div>
          <p id="error"></p>
          <TodosItems />

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

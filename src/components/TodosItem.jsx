/* eslint-disable react/prop-types */
export default function TodosItem({ data, removeTask, doneTask }) {
  return (
    <>
      <div id="tasksContainer">
        {!data
          ? ""
          : data.map((task) => {
              return (
                <div
                  key={task.id}
                  className={`item ${task.isDone ? "item--done" : ""}`}
                  onClick={() => doneTask(task.id)}
                >
                  <div className="task-checkbox"></div>
                  <p>{task.title}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTask(task.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
      </div>
    </>
  );
}

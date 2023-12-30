export default function TodoList({ todo, onDelete, clickedTask }) {
  return (
    <ul>
      {todo.map((todo, index) => {
        const { todoName, completed, id } = todo;
        return (
          <li key={id}>
            <div className="flex justify-between items-center shadow rounded-md my-3">
              <span
                className={
                  completed
                    ? "line-through font-bold px-4 py-5"
                    : "font-bold px-4 py-5"
                }
                onClick={() => clickedTask(index, completed, id)}
              >
                {todoName}
              </span>
              <button
                className="bg-amber-400 text-white px-3 py-1 mx-4 rounded-md hover:drop-shadow-lg hover:bg-amber-500"
                onClick={() => onDelete(index)}
              >
                x
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

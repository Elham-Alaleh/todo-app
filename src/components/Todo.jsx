import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Count from "./Count";

export default function Todo() {
  const [todo, setTodo] = useState(() => {
    const savedState = localStorage.getItem("todos");
    const todo = JSON.parse(savedState);
    return todo || [];
  });

  const [todoName, setTodoName] = useState("");

  function handleInputChange(e) {
    setTodoName(e.target.value);
  }

  function handleSubmit() {
    setTodo([
      ...todo,
      {
        todoName: todoName,
        completed: false,
        id: Date.now(),
      },
    ]);
    e.preventDefault();
    setTodoName("");
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  //handel deleted todo
  function handleDeleteTodo(index) {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  //handle completed todo or undo it by clicking on the todo
  function handleClickedTodo(index, completed, id) {
    const newTodo = [...todo];
    const clickedTask = newTodo[index];
    newTodo.splice(index, 1);
    if (completed === false) {
      clickedTask.completed = true;
      newTodo.push(clickedTask);
      setTodo(newTodo);
    } else {
      clickedTask.completed = false;
      newTodo.unshift(clickedTask);
      setTodo(newTodo);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="py-10 w-11/12 md:w-8/12 lg:w-1/2 xl:w-1/2 group relative">
          <form onSubmit={handleSubmit} className="w-full align-center">
            <input
              className="w-full py-5 px-2 rounded-md drop-shadow-md focus:outline-none"
              type="text"
              onChange={handleInputChange}
              value={todoName}
              placeholder="Add a task..."
              required
            />
            <button
              className="bg-amber-400 absolute text-white text-xs right-5 mt-4 py-2 px-3 rounded hover:drop-shadow-lg hover:bg-amber-500"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
        <div className="w-9/12 md:w-7/12 lg:w-5/12 xl:w-5/12">
          <TodoList
            todo={todo}
            onDelete={handleDeleteTodo}
            clickedTask={handleClickedTodo}
          />
        </div>
      </div>
      <Count todo={todo} />
    </>
  );
}

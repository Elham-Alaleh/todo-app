export default function Count({ todo }) {
  function CountCompletedTodos() {
    const completed = todo.filter((todo) => todo.completed === true);
    const count = completed.length;
    return count;
  }
  return (
    <div className="bg-amber-400 font-bold text-xl flex justify-center flex-row fixed bottom-0 left-0 right-0 py-2">
      <span className="basis-1/4 md:basis-1/3 text-nowrap">
        Total: {todo.length}
      </span>
      <span className="basis-1/4 md:basis-1/3 text-nowrap">
        Completed: {CountCompletedTodos()}
      </span>
    </div>
  );
}

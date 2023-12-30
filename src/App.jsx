import Count from "./components/Count";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <header className="bg-amber-400 text-slate-800 text-center font-bold text-3xl py-3 sticky top-0 left-0 right-0 drop-shadow-md">
        TODO LIST
      </header>
      <Todo />
    </>
  );
}

export default App;

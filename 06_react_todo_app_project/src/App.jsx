import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {

  const todoItems = [{
    name: "Buy Milk",
    date: "13-11-2023"
  },
  {
    name: "Go to College",
    date: "13-11-2023"
    },
    {
      name: "Study React",
      date: "13-11-2023"
  }]

  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo />
        <TodoItems todoItems={ todoItems} />
        
      </div>
    </center>
  );
}

export default App;

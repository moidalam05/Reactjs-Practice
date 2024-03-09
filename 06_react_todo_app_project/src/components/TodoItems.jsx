import TodoItem from "./TodoItem";
function TodoItems({ todoItems }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.date} />
      ))}
    </div>
  );
}

export default TodoItems;
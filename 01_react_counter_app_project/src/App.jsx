import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);
  const addvalue = () => {
    if (counter === 20) {
      setcounter(counter);
    } else {
      setcounter(counter + 1);
    }
  };
  const removevalue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    } else {
      setcounter(counter);
    }
  };

  return (
    <>
      <h1>This is a counter app using react</h1>
      <h2>{counter}</h2>
      <button onClick={addvalue}>Increase</button>
      <button onClick={removevalue}>Decrease</button>
    </>
  );
}

export default App;

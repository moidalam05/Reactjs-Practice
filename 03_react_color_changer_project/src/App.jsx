import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded-md">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 rounded-sm text-white shadow-md"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-2 rounded-sm text-white shadow-md"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-2 rounded-sm text-black shadow-md"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setcolor("orange")}
            className="outline-none px-4 py-2 rounded-sm text-black shadow-md"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-2 rounded-sm text-white shadow-md"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setcolor("magenta")}
            className="outline-none px-4 py-2 rounded-sm text-black shadow-md"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>

          <button
            onClick={() => setcolor("cyan")}
            className="outline-none px-4 py-2 rounded-sm text-black shadow-md"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>

          <button
            onClick={() => setcolor("black")}
            className="outline-none px-4 py-2 rounded-sm text-white shadow-md"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setcolor("lightblue")}
            className="outline-none px-4 py-2 rounded-sm text-black shadow-md"
            style={{ backgroundColor: "lightblue" }}
          >
            Lightblue
          </button>

          <button
            onClick={() => setcolor("lightgreen")}
            className="outline-none px-4 py-2 rounded-sm text-black shadow-md"
            style={{ backgroundColor: "lightgreen" }}
          >
            Lightgreen
          </button>

          <button
            onClick={() => setcolor("bisque")}
            className="outline-none px-4 py-2 rounded-sm text-black shadow-md"
            style={{ backgroundColor: "bisque" }}
          >
            Bisque
          </button>

          <button
            onClick={() => setcolor("aqua")}
            className="outline-none px-4 py-2 rounded-sm text-black shadow-md"
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>

          <button
            onClick={() => setcolor("blanchedalmond")}
            className="outline-none px-4 py-2 rounded-sm text-black shadow-md"
            style={{ backgroundColor: "blanchedalmond" }}
          >
            Blanchedalmond
          </button>

          <button
            onClick={() => setcolor("crimson")}
            className="outline-none px-4 py-2 rounded-sm text-white shadow-md"
            style={{ backgroundColor: "crimson" }}
          >
            Crimson
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

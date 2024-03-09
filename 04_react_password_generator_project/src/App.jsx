import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [passLength, setPassLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()_-+={}[]|:;<>,.?/";

    for (let i = 1; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [passLength, numAllowed, charAllowed, setPassword]);

  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [passLength, numAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full h-screen bg-black py-20">
        <div className="max-w-3xl mx-auto shadow-md rounded-md px-4 py-8 text-orange-500 bg-gray-700 text-center">
          <h1 className="text-white text-center text-2xl mb-6">
            Password Generator
          </h1>
          <div className="flex shadow rounded-md overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="outline-none w-full py-1 px-3"
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-blue-700 text-white px-3 shrink-0 hover:bg-green-700 text-xl"
              onClick={copyPassToClip}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2 justify-evenly">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={100}
                value={passLength}
                className="cursor-pointer"
                onChange={(e) => {
                  setPassLength(e.target.value);
                }}
              />
              <label className="text-lg">Length: {passLength}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className="text-lg">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput" className="text-lg">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

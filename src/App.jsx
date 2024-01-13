import { useState } from "react";
import "./App.css";

function App() {
  let colors = [" #84c6fc", "#8b900c", "#fff", "#000"];
  const [color, setColor] = useState(colors[1]);

  // const colorPicker = (e) => {
  //   setColor(e);
  // };

  return (
    <div
      className="w-full h-screen duration-200 bg-black flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor(colors[1])}
            className="outline-none px-6 py-1 rounded-full shadow-lg  text-lime-500 hover:bg-lime-500 hover:text-white"
          >
            Olive Mode
          </button>
          <button
            onClick={() => setColor(colors[2])}
            className="outline-none px-6 py-1 rounded-full shadow-lg  text-white  bg-black hover:bg-white hover:text-black"
          >
            White Mode
          </button>
          <button
            onClick={() => setColor(colors[3])}
            className="outline-none px-6 py-1 rounded-full shadow-lg text-black  hover:text-white hover:bg-black"
          >
            Dark Mode
          </button>
          <button
            onClick={() => setColor(colors[0])}
            className="outline-none px-6 py-1 rounded-full shadow-lg text-blue-300  hover:bg-blue-300 hover:text-white"
          >
            Baby Blue Mode
          </button>
          <button
            onClick={() => setColor("hotpink")}
            className="outline-none px-6 py-1 rounded-full shadow-lg  text-pink-400 hover:bg-pink-400 hover:text-white"
          >
            Hot Pink Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

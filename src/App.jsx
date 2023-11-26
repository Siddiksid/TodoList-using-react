import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState("");

  return (
    <div className="w-screen h-screen border-2 border-solid  text-white bg-[#8758ff] ">
      <div
        className="mx-auto flex flex-col justify-start my-3 py-4
       max-w-md   gap-1 px-3 bg-[#1A1A40] h-[400px] overflow-scroll"
      >
        <div>
          <input
            type="text"
            className="border-2 border-solid py-0 px-1 text-lg  border-[#8758ff] text-black  shadow-lg w-[82%] font-mono"
            onChange={(e) => setSingleItem(e.target.value)}
          />
          <button
            className="outline-none border-2 ml-1 border-solid border-[#8758ff] bg-blue-700  px-4 h-8 shadow-md"
            onClick={() => setItems((prevItems) => [...prevItems, singleItem])}
          >
            Add
          </button>
        </div>

        <ul>
          {items.map((item, index) => (
            <li
              className="border-2 flex  shadow-2xl justify-between text-white border-[#8758ff] px-3 py-1 mt-3 w-[100%] mx-auto "
              key={index}
            >
              {item}
              <div>
                <button
                  className="px-2 outline-none mx-1 bg-blue-700 "
                  onClick={() => {
                    setItems(items.filter((item, idx) => idx != index));
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

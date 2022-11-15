import "./App.css";
import Profile from "./Profile";
import {useState} from "react";
import React from "react";

export default function App() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "hide profile" : "Show profile"}
      </button>
      {show && <Profile />}
    </div>
  );
}
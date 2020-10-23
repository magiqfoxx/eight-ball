import React, { useState } from "react";
import "./App.css";

function App() {
  const messages = [
    "no chyba nie",
    "no chyba ty",
    "tak było, nie zmyślam",
    "no to ŚWIETNIE!",
    "AHA.",
  ];
  const [text, setText] = useState("");
  const [shaking, setShaking] = useState(false);
  return (
    <div className="container">
      <h2>
        Magiczna kula pomoze Ci podjąć decyzję. Po prostu zadaj pytanie i
        potrząśnij.
      </h2>
      <button
        onClick={() => {
          setText(messages[Math.floor(Math.random() * 4)]);
          setShaking(true);
          setTimeout(() => {
            setShaking(false);
          }, 4000);
        }}
      >
        shake
      </button>
      <div className={shaking ? "ball shaking" : "ball"}>
        <div className={shaking ? "shaking-message message" : "message"}>
          <span className={shaking ? "shaking-text text" : "text"}>{text}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

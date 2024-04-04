import { useState, useEffect } from "react";

import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(
    localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0
  );

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <span>{count}</span>
      <div className="buttons">
        <Button text="Increase" onClick={() => setCount(count + 1)} />
        <Button text="Decrease" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
}

export default App;

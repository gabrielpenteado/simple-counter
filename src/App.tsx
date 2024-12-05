import { useState, useEffect } from "react";

import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(
    localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0
  );

  const increaseCounter = () => {
    setCount((prevState) => prevState + 1);
  };

  const decreaseCounter = () => {
    setCount((prevState) => prevState - 1);
  };

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <span>{count}</span>
      <div className="buttons">
        <Button text="Increase" action={increaseCounter} />
        <Button text="Decrease" action={decreaseCounter} />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count = setInterval, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <h1>This is {count} </h1>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <button onClick={() => setCount(count - 1)}>Remove One</button>
    </div>
  );
}

export default App;

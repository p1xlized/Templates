import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1
        className="text-3xl font-bold underline"
      >
        Vite + React
      </h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  // counter state
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Hello Abhi 👋</h1>
      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount(count + 5)}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ➕ +5
      </button>

      <button
        onClick={() => setCount(count - 5)}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ➖ -5
      </button>
    </div>
  );
}

export default App;

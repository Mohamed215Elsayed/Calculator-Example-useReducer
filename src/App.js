import "./App.css";
import { useState, useReducer } from "react";
import resultReducer from "./reducers/resultReducer";
function App() {
  const [firstNumberInput, setFirstNumberInput] = useState("");
  const [secondNumberInput, setSecondNumberInput] = useState("");
  const [result, dispatchResultAction] = useReducer(resultReducer, 0);

  const handleClick = (type) => {
    dispatchResultAction({
      type,
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      },
    });
  };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: "teal",
        color: "white",
      }}
    >
      {/* FIRST INPUT */}
      <label>First Number</label>
      <input
        type="number"
        value={firstNumberInput}
        onChange={(e) => setFirstNumberInput(e.target.value)}
      />

      {/* SECOND INPUT */}
      <label>Second Number</label>
      <input
        type="number"
        value={secondNumberInput}
        onChange={(e) => setSecondNumberInput(e.target.value)}
      />

      {/* OPERATION BUTTONS */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleClick("ADD")}>Add</button>
        <button onClick={() => handleClick("SUB")}>Subtract</button>
        <button onClick={() => handleClick("MULT")}>Multiply</button>
        <button onClick={() => handleClick("DIV")}>Divide</button>
      </div>

      <hr />

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;

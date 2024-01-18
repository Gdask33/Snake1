import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    const greenSnake = new Snake("green");
    const blueSnake = new Snake("blue");
    greenSnake.move(2);
    greenSnake.turn();
    greenSnake.move(3);
    display("greenSnake has a position of:", greenSnake.position);
    display("blueSnake has a position of:", blueSnake.position);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}

import "./App.css";
import "./App.css";
import Snake from "./Snake";
import { worldModel } from "./Snake";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const snake1 = new Snake("green");
    const snake2 = new Snake("maroon");
    snake1.move(2);
    snake1.turnRight();
    snake1.move(3);
    snake1.turnLeft();
    snake1.move(4);

    display(
      "snake1 has a position of: (" +
        snake1.position.x +
        " , " +
        snake1.position.y +
        ")",
    );
    display(
      "snake2 has a position of: (" +
        snake2.position.x +
        " , " +
        snake2.position.y +
        ")",
    );
    const worldModel1 = new worldModel(snake1);
    worldModel1.update(5);
    display(
      "Updated snake position: x =",
      snake1.position.x,
      "y =",
      snake1.position.y,
    );
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">OUTPUT:</pre>
      <p>
        Then visit the <a href="docs">documentation</a>. Every time you update
        the doc comments, run the second command in the terminal.
      </p>
    </div>
  );
}

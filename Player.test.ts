import SnakeController from "./SnakeController";
import Player from "./Player";
import Snake from "./Snake";
import WorldModel from "./WorldModel"; // Import the Player class

describe("Player Tests", () => {
  let snakeController: SnakeController;

  // Create a SnakeController instance before each test
  beforeEach(() => {
    // Create a mock WorldModel and Snake instance for SnakeController
    const mockSnake = new Snake("green");
    const mockWorldModel = new WorldModel(mockSnake, 10, 10);

    snakeController = new SnakeController(mockWorldModel, mockSnake);
  });
  it("should initialize Player with SnakeController", () => {
    // Create a concrete Player subclass
    class TestPlayer extends Player {
      makeTurn(): void {
        const snake = this.sc.getsnake();
        const snakeDirection = this.sc.getsnakeDirection();
        const worldModel = this.sc.getWorldModel();
        const direction = snake.getdirection();
        const position = snake.getposition();
        const worldHeight = worldModel.getWorldHeight();
        const worldWidth = worldModel.getWorldWidth();

        if (direction === "left" && position.x === 0) {
          this.sc.turnSnakeLeft();
          return;
        }

        if (direction === "right" && position.x === worldWidth - 1) {
          this.sc.turnSnakeRight();
          return;
        }

        if (direction === "up" && position.y === 0) {
          this.sc.turnSnakeLeft();
          this.sc.turnSnakeLeft();
          return;
        }

        if (direction === "down" && position.y === worldHeight - 1) {
          this.sc.turnSnakeRight();
          this.sc.turnSnakeRight();
          return;
        }
      }
    }

    // Create an instance of the TestPlayer class
    const testPlayer = new TestPlayer(snakeController);

    // Verify that Player has a reference to SnakeController
    expect(testPlayer).toHaveProperty("sc", snakeController);
  });

  it("should implement makeTurn method", () => {
    // Create a concrete Player subclass
    class TestPlayer extends Player {
      // Override the makeTurn method
      makeTurn(): void {
        // Implement the makeTurn method
      }
    }

    // Create an instance of the TestPlayer class
    const testPlayer = new TestPlayer(snakeController);

    // Call the makeTurn method and expect no errors
    expect(() => testPlayer.makeTurn()).not.toThrow();
  });
});

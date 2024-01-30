import SnakeController from "./SnakeController";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import Point from "./Point";

describe("AvoidWallsPlayer Tests", () => {
  let snakeController: SnakeController;
  let snake: Snake;
  let worldModel: WorldModel;
  let player: AvoidWallsPlayer;
  const WorldWidth = 10;
  const WorldHeight = 10;

  beforeEach(() => {
    snake = new Snake("green");
    worldModel = new WorldModel(snake, WorldWidth, WorldHeight);
    snakeController = new SnakeController(worldModel, snake);
    player = new AvoidWallsPlayer(snakeController);
  });

  it("should turn right when snake is moving left and reaches the left wall", () => {
    snakeController.turnSnakeLeft(); // Turn the snake left (facing down)
    snakeController.turnSnakeLeft();
    snake.move(WorldWidth - 1); // Turn the snake left again (facing left)

    console.log(
      "Before turn - Position:",
      snakeController.getsnakePosition(),
      "Direction:",
      snakeController.getsnakeDirection(),
    );

    player.makeTurn();

    console.log(
      "After turn - Position:",
      snakeController.getsnakePosition(),
      "Direction:",
      snakeController.getsnakeDirection(),
    );

    expect(snakeController.getsnakeDirection()).toBe("up");
  });

  it("should turn left when snake is moving right and reaches the right wall", () => {
    snake.move(WorldWidth - 1);
    console.log(
      "Before turn - Direction:",
      snakeController.getsnakeDirection(),
    );
    player.makeTurn();
    console.log("After turn - Direction:", snakeController.getsnakeDirection());
    expect(snakeController.getsnakeDirection()).toBe("up");
  });

  it("should turn right when snake is moving up and reaches the top wall", () => {
    snakeController.turnSnakeLeft(); // This should turn the snake upwards
    snake.move(WorldHeight - 1); // Move snake to the top edge

    console.log(
      "Before turn - Position:",
      snakeController.getsnakePosition(),
      "Direction:",
      snakeController.getsnakeDirection(),
    );

    player.makeTurn();

    console.log(
      "After turn - Position:",
      snakeController.getsnakePosition(),
      "Direction:",
      snakeController.getsnakeDirection(),
    );

    expect(snakeController.getsnakeDirection()).toBe("right");
  });

  it("should turn left when snake is moving down and reaches the bottom wall", () => {
    snakeController.turnSnakeRight();
    snake.move(WorldHeight - 1);
    console.log(
      "Before turn - Direction:",
      snakeController.getsnakePosition(),
      "Direction:",
      snakeController.getsnakeDirection(),
    );
    player.makeTurn();
    console.log(
      "After turn - Direction:",
      snakeController.getsnakePosition(),
      "Direction:",
      snakeController.getsnakeDirection(),
    );
    expect(snakeController.getsnakeDirection()).toBe("right");
  });
});

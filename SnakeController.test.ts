import SnakeController from "./SnakeController";
import WorldModel from "./WorldModel";
import Snake from "./Snake";

describe("SnakeController Tests", () => {
  let snakeController: SnakeController;
  let snake: Snake;
  let worldModel: WorldModel;

  beforeEach(() => {
    snake = new Snake("green");
    worldModel = new WorldModel(snake, 10, 10);
    snakeController = new SnakeController(worldModel, snake);
  });

  it("should initialize snakeWorld and slitherer properties", () => {
    expect(snakeController).toHaveProperty("snakeWorld", worldModel);
    expect(snakeController).toHaveProperty("slitherer", snake);
  });

  it("should call turnLeft method on slitherer when turnSnakeLeft is called", () => {
    const turnLeftSpy = jest.spyOn(snake, "turnLeft");
    snakeController.turnSnakeLeft();
    expect(turnLeftSpy).toHaveBeenCalledTimes(1);
  });

  it("should call turnRight method on slitherer when turnSnakeRight is called", () => {
    const turnRightSpy = jest.spyOn(snake, "turnRight");
    snakeController.turnSnakeRight();
    expect(turnRightSpy).toHaveBeenCalledTimes(1);
  });

  it("should return snake's position when getsnakePosition is called", () => {
    const position = snakeController.getsnakePosition();
    expect(position).toEqual({ x_coordinate: 0, y_coordinate: 0 });
  });

  it("should return snake's direction when getsnakeDirection is called", () => {
    const direction = snakeController.getsnakeDirection();
    expect(direction).toEqual("right");
  });

  it("should return world width when getworldWidth is called", () => {
    const width = snakeController.getworldWidth();
    expect(width).toEqual(worldModel.getWorldWidth());
  });

  it("should return world height when getworldHeight is called", () => {
    const height = snakeController.getworldHeight();
    expect(height).toEqual(worldModel.getWorldHeight());
  });

  it("should return the snake object when getsnake is called", () => {
    const returnedSnake = snakeController.getsnake();
    expect(returnedSnake).toBe(snake);
  });

  it("should return the WorldModel object when getWorldModel is called", () => {
    const returnedWorldModel = snakeController.getWorldModel();
    expect(returnedWorldModel).toBe(worldModel);
  });
});

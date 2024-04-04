import SnakeController from "./SnakeController";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
import Point from "./Point";

describe("SnakeController Tests", () => {
  let snakeController: SnakeController;
  let snake: Snake;
  let worldModel: WorldModel;

  beforeEach(() => {
    snake = new Snake("blue", new Point(0, 0), "right", 1);
    worldModel = new WorldModel(10, 10);
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
    const position = snakeController.snakePosition;
    expect(position).toEqual({ x_coordinate__: 0, y_coordinate__: 0 });
  });

  it("should return snake's direction when getsnakeDirection is called", () => {
    const direction = snakeController.snakeDirection;
    expect(direction).toEqual("right");
  });

  it("should return world width when getworldWidth is called", () => {
    const width = snakeController.worldWidth;
    expect(width).toEqual(worldModel.WorldWidth);
  });

  it("should return world height when getworldHeight is called", () => {
    const height = snakeController.worldHeight;
    expect(height).toEqual(worldModel.WorldHeight);
  });

  it("should return the snake object when getsnake is called", () => {
    const returnedSnake = snakeController.snake;
    expect(returnedSnake).toStrictEqual([]);
  });

  it("should return the WorldModel object when getWorldModel is called", () => {
    const returnedWorldModel = snakeController.WorldModel;
    expect(returnedWorldModel).toBe(worldModel);
  });
});

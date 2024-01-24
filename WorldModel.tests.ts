import Snake from "./Snake";
import WorldModel from "./WorldModel";
describe("WorldModel Tests", () => {
  let Model: WorldModel;
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake("green");
    Model = new WorldModel(snake);
  });

  test("WorldModel updates the Snake's position correctly", () => {
    Model.update(3);
    expect(snake.position.x).toBe(3);
    expect(snake.position.y).toBe(0);
  });

  test("Snake turns right and WorldModel updates its position correctly", () => {
    snake.turnRight();
    Model.update(2);
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(-2);
  });

  test("Snake turns left and WorldModel updates its position correctly", () => {
    snake.turnLeft();
    Model.update(1);
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(1);
  });
  test("Snake turns left twice and WorldModel updates its position correctly", () => {
    snake.turnLeft();
    snake.turnLeft();
    Model.update(1);
    expect(snake.position.x).toBe(-1);
    expect(snake.position.y).toBe(0);
  });
});

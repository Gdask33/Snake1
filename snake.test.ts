import Snake from "./Snake";
import Point from "./Point";

describe("Snake class", () => {
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake("green");
  });

  test("constructor initializes properties correctly", () => {
    expect(snake.position).toEqual(new Point(0, 0));
    expect(snake.direction).toBe("right");
  });

  describe("move method", () => {
    test("moves right correctly", () => {
      snake.move(3);
      expect(snake.position).toEqual(new Point(3, 0));
    });

    test("moves left correctly", () => {
      snake.turnLeft();
      snake.turnLeft();
      snake.move(3);
      expect(snake.position).toEqual(new Point(-3, 0));
    });

    test("moves up correctly", () => {
      snake.turnLeft(); // Turn left to up
      snake.move(3);
      expect(snake.position).toEqual(new Point(0, 3));
    });

    test("moves down correctly", () => {
      snake.turnRight(); // Now facing down
      snake.move(3);
      expect(snake.position).toEqual(new Point(0, -3));
    });
  });

  describe("turnRight method", () => {
    const directions = ["right", "down", "left", "up"];

    directions.forEach((startDirection, index) => {
      test(`turns from ${startDirection} to ${directions[(index + 1) % directions.length]}`, () => {
        snake = new Snake("green"); // reset snake direction to right
        for (let i = 0; i <= index; i++) {
          snake.turnRight();
        }
        expect(snake.direction).toBe(
          directions[(index + 1) % directions.length],
        );
      });
    });
  });

  describe("turnLeft method", () => {
    const directions = ["right", "up", "left", "down"];

    directions.forEach((startDirection, index) => {
      test(`turns from ${startDirection} to ${directions[(index + 1) % directions.length]}`, () => {
        snake = new Snake("green"); // reset snake direction to right
        for (let i = 0; i <= index; i++) {
          snake.turnLeft();
        }
        expect(snake.direction).toBe(
          directions[(index + 1) % directions.length],
        );
      });
    });
  });
});

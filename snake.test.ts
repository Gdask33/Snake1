import Snake from "./Snake";
import Point from "./Point";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";

describe("Snake Class Tests", () => {
  let snake: Snake;
  const startingPosition = new Point(5, 5);
  const size = 5;
  const color = "green";

  beforeEach(() => {
    snake = new Snake(color, startingPosition, "right", size);
    const parts = snake.parts;
    const WorldModel1 = new WorldModel(50, 50);
    WorldModel1.addSnakes([snake]);
    console.log(snake.didCollide);
    console.log(snake.position);
  });

  test("Snake initializes with correct properties", () => {
    expect(snake.color__).toBe(color);
    expect(snake.position).toEqual(startingPosition);
    expect(snake.size).toBe(size);
    expect(snake.direction).toBe("right");
    expect(snake.parts.length).toBe(size);
  });

  describe("Movement", () => {
    test("moves right correctly", () => {
      snake.move(1);
      expect(snake.position).toEqual(
        new Point(startingPosition.x + 1, startingPosition.y),
      );
    });

    test("moves left correctly", () => {
      snake.setDirection("left");
      snake.move(1);
      expect(snake.position).toEqual(
        new Point(startingPosition.x - 1, startingPosition.y),
      );
    });

    test("moves up correctly", () => {
      snake.setDirection("up");
      snake.move(1);
      expect(snake.position).toEqual(
        new Point(startingPosition.x, startingPosition.y - 1),
      );
    });

    test("moves down correctly", () => {
      snake.setDirection("down");
      snake.move(1);
      expect(snake.position).toEqual(
        new Point(startingPosition.x, startingPosition.y + 1),
      );
    });

    describe("Collision Detection", () => {
      test("detects no collision on open move", () => {
        snake.parts.forEach((part, index) => {
          if (index > 0) {
            // Skip the head itself
            expect(snake.head.x === part.x && snake.head.y === part.y).toBe(
              false,
            );
          }
        });
      });

      test("detects collision with itself", () => {
        // Starting direction is right, and size is 3.
        // Move the snake right to create space for turning.
        snake.move(2); //
        console.log(snake.parts);
        // Turn up or down (depending on your coordinate system, choose appropriately).
        snake.setDirection("down"); // Assuming the positive Y-axis goes upwards.
        snake.move(1);
        // Turn left to head back towards the tail.
        snake.setDirection("left");
        snake.move(2);

        // Check if the snake has collided with itself
        expect(snake.didCollide(snake)).toBe(true);
      });

      test("detects collision with another snake", () => {
        const otherSnake = new Snake("blue", new Point(6, 5), "left", 3);
        snake.move(1); // Moves into the other snake
        expect(snake.didCollide(otherSnake)).toBe(true);
      });
    });
  });
});

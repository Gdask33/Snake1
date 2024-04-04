import Point from "./Point";
class Snake {
  /**
   * Represents a snake with Poistion, Direction, and color
   */
  private currentParts__: Point[];
  private currentPosition__: Point;
  private currentDirection__: string;
  public color__: string;
  private startingPosition__ = new Point(0, 0);
  private size__: number;
  /**
   * Constructs a snake with a specified color
   * @param color - the color of the snake
   */
  constructor(
    color: string,
    startingPosition: Point = new Point(0, 0),
    direction: string = "right",
    size: number,
  ) {
    this.color__ = color;
    this.startingPosition__ = startingPosition;
    this.currentPosition__ = new Point(startingPosition.x, startingPosition.y);
    this.currentParts__ = [];
    this.currentDirection__ = direction;
    this.size__ = size;
    for (let i = 0; i < size; i++) {
      let part;
      switch (direction) {
        case "right":
          // If moving right, add tail to the left of the head
          part = new Point(startingPosition.x - i, startingPosition.y);
          break;
        case "left":
          // If moving left, add tail to the right of the head
          part = new Point(startingPosition.x + i, startingPosition.y);
          break;
        case "up":
          // If moving up, add tail below the head
          part = new Point(startingPosition.x, startingPosition.y + i);
          break;
        case "down":
          // If moving down, add tail above the head
          part = new Point(startingPosition.x, startingPosition.y - i);
          break;
        default:
          // Default to adding the tail to the left if the direction is unspecified
          part = new Point(startingPosition.x - i, startingPosition.y);
          break;
      }
      this.currentParts__.push(part);
    }
  }

  /**
   * Moves the snake in its current direction by the specified number of squares.
   * @param squares - The number of squares to move.
   */
  public get direction(): string {
    return this.currentDirection__;

    /**
     * @returns - the current direction of the snake
     */
  }
  /**
   * @returns The current direction of the snake.
   */
  public get head(): Point {
    return this.currentParts__[0];
    /**
     * @returns the current poistion on x,y coordinate of snake
     */
  }

  public get position(): Point {
    return this.currentPosition__;
  }

  public setPosition(newPosition: Point) {
    this.currentPosition__ = newPosition;
  }

  public setDirection(newDirection: string) {
    this.currentDirection__ = newDirection;
  }

  public get parts(): Point[] {
    return this.currentParts__;
  }
  public get size(): number {
    return this.currentParts__.length;
  }

  public set direction(newDirection: string) {
    this.currentDirection__ = newDirection;
  }
  public didCollide(other: Snake): boolean {
    // Check collision with itself (excluding the head)
    for (let i = 1; i < this.size; i++) {
      if (
        this.head.x === this.currentParts__[i].x &&
        this.head.y === this.currentParts__[i].y
      ) {
        return true;
      }
    }

    // Check collision with the other snake (including head collision with the other snake's head)
    for (let i = 0; i < other.size; i++) {
      if (
        this.head.x === other.currentParts__[i].x &&
        this.head.y === other.currentParts__[i].y
      ) {
        return true;
      }
    }
    return false;
  }

  //moves the snake in the current direction
  public move(squares: number) {
    for (let i = this.currentParts__.length - 1; i > 0; i--) {
      this.currentParts__[i] = this.currentParts__[i - 1];
    }
    let head = this.currentParts__[0];
    let newX = head.x;
    let newY = head.y;
    if (this.direction === "right") {
      newX += squares;
    } else if (this.direction === "left") {
      newX -= squares;
    } else if (this.direction === "up") {
      newY -= squares;
    } else if (this.direction === "down") {
      newY += squares;
    }
    this.currentPosition__ = new Point(newX, newY);
    this.currentParts__[0] = this.currentPosition__;
  }

  //turns the snake to the right
  public turnRight() {
    this.currentDirection__ = "right";
  }
  //turns the snake to the left
  public turnLeft() {
    this.currentDirection__ = "left";
  }
  public turnDown() {
    this.currentDirection__ = "down";
  }
  public turnUp() {
    this.currentDirection__ = "up";
  }
}

export default Snake;

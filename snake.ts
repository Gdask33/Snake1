import Point from "./Point";
class Snake {
  /**
   * Represents a snake with Poistion, Direction, and color
   */
  private currentPosition__: Point;
  private currentDirection__: string;
  private color__: string;
  /**
   * Constructs a snake with a specified color
   * @param color - the color of the snake
   */
  constructor(color: string) {
    this.color__ = color;
    this.currentPosition__ = new Point(0, 0);
    this.currentDirection__ = "right";
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
  public get position(): Point {
    return this.currentPosition__;
    /**
     * @returns the current poistion on x,y coordinate of snake
     */
  }
  public set position(newPosition: Point) {
    this.currentPosition__ = newPosition;
  }
  public set direction(newDirection: string) {
    this.currentDirection__ = newDirection;
  }
  //moves the snake in the current direction
  public move(squares: number) {
    let newX: number = this.position.x;
    let newY: number = this.position.y;
    if (this.direction === "right") {
      newX += squares;
    } else if (this.direction === "left") {
      newX -= squares;
    } else if (this.direction === "up") {
      newY -= squares;
    } else if (this.direction === "down") {
      newY += squares;
    }
    this.position = new Point(newX, newY);
  }

  //turns the snake to the right
  public turnRight() {
    if (this.direction === "right") {
      this.direction = "right";
    } else if (this.direction === "down") {
      this.direction = "right";
    } else if (this.direction === "left") {
      this.direction = "right";
    } else if (this.direction === "up") {
      this.direction = "right";
    }
  }
  //turns the snake to the left
  public turnLeft() {
    if (this.direction === "right") {
      this.direction = "left";
    } else if (this.direction === "up") {
      this.direction = "left";
    } else if (this.direction === "left") {
      this.direction = "left";
    } else if (this.direction === "down") {
      this.direction = "left";
    }
  }
  public turnDown() {
    if (this.direction === "right") {
      this.direction = "down";
    } else if (this.direction === "left") {
      this.direction = "down";
    } else if (this.direction === "up") {
      this.direction = "down";
    } else if (this.direction === "down") {
      this.direction = "down";
    }
  }
  public turnUp() {
    if (this.direction === "right") {
      this.direction = "up";
    } else if (this.direction === "left") {
      this.direction = "up";
    } else if (this.direction === "up") {
      this.direction = "up";
    } else if (this.direction === "down") {
      this.direction = "up";
    }
  }
}

export default Snake;

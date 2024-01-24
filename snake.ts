import Point from "./Point";
class Snake {
  /**
   * Represents a snake with Poistion, Direction, and color
   */
  private currentPosition: Point;
  private currentDirection: string;
  private color: string;
  /**
   * Constructs a snake with a specified color
   * @param color - the color of the snake
   */
  constructor(color: string) {
    this.color = color;
    this.currentPosition = new Point(0, 0);
    this.currentDirection = "right";
  }
  /**
   * Moves the snake in its current direction by the specified number of squares.
   * @param squares - The number of squares to move.
   */
  public get direction() {
    return this.currentDirection;

    /**
     * @returns - the current direction of the snake
     */
  }
  //moves the snake in the current direction
  public move(squares: number) {
    let newX: number = this.currentPosition.x;
    let newY: number = this.currentPosition.y;
    if (this.currentDirection === "right") {
      newX += squares;
    } else if (this.currentDirection === "left") {
      newX -= squares;
    } else if (this.currentDirection === "up") {
      newY += squares;
    } else if (this.currentDirection === "down") {
      newY -= squares;
    }
    this.currentPosition = new Point(newX, newY);
  }
  /**
   * @returns The current direction of the snake.
   */
  public get position() {
    return this.currentPosition;
    /**
     * @returns the current poistion on x,y coordinate of snake
     */
  }
  //turns the snake to the right
  public turnRight() {
    if (this.currentDirection === "right") {
      this.currentDirection = "down";
    } else if (this.currentDirection === "down") {
      this.currentDirection = "left";
    } else if (this.currentDirection === "left") {
      this.currentDirection = "up";
    } else if (this.currentDirection === "up") {
      this.currentDirection = "right";
    }
  }
  //turns the snake to the left
  public turnLeft() {
    if (this.currentDirection === "right") {
      this.currentDirection = "up";
    } else if (this.currentDirection === "up") {
      this.currentDirection = "left";
    } else if (this.currentDirection === "left") {
      this.currentDirection = "down";
    } else if (this.currentDirection === "down") {
      this.currentDirection = "right";
    }
  }
}

/*public turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
    }
  }
}*/

export default Snake;


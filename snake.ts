// import display from "./display";

// place your code on line 5 above the export statement below
export class worldModel {
  private snake: Snake;
  /** 
 *constructs a world model with the given snake
 @param snake - snake that is bring used in the model
 */
  constructor(snake: Snake) {
    this.snake = snake;
  }

  /**
   * updates the snake position
   * @param steps - number of steps
   */
  public update(steps: number) {
    this.snake.move(steps);
  }
  /**
   * @returns updated coordinates for snake in the world model
   */
  public get Snake() {
    return this.snake;
  }
}

class Point {
  private x_coordinate: number;
  private y_corrdinate: number;

  /**
   * @param x - x coordinate
   * @param y - y coordinate
   */
  constructor(x: number, y: number) {
    this.x_coordinate = x;
    this.y_corrdinate = y;
  }

  /**
   * gets the x coordinate of the point
   * @returns the x coordinate
   */
  public get x() {
    return this.x_coordinate;
  }
  /**
   * gets the y coordinate of the point
   * @returns the y coordinate
   */
  public get y() {
    return this.y_corrdinate;
  }
}
class Snake {
  private currentPosition: Point;
  private currentDirection: string;
  private color: string;
  /**
   * @param color - the color of the snake
   *
   */
  constructor(color: string) {
    this.color = color;
    this.currentPosition = new Point(0, 0);
    this.currentDirection = "right";
  }
  /**
   * @param squares - the number of squares to move
   *
   */
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
   * gets the current position of the snake
   * @returns - the current position as a Point object
   *
   */
  public get position() {
    return this.currentPosition;
  }
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


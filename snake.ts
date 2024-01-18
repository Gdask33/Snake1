// import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  private color: string;
  constructor(snakeColor: string) {
    this.currentPosition = 0;
    this.currentDirection = 1;
    this.color = snakeColor;
  }
  public move(squares: number) {
    if (this.currentDirection === 1) {
      this.currentPosition += squares;
    } else if (this.currentDirection === -1) {
      this.currentPosition -= squares;
    }
  }
  public get position() {
    return this.currentPosition;
  }
  public turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
    }
  }
}

export default Snake;


import Snake from "./Snake";
export default class WorldModel {
  private snake: Snake;
  /** 
   *constructs a world model with the given snake
   @param snake - snake that is being used in the model
   */
  constructor(snake: Snake) {
    this.snake = snake;
  }

  /**
   * updates the snake position based on the amount of steps moved
   * @param steps - number of steps
   */
  public update(steps: number) {
    this.snake.move(steps);
  }
  /** uses snake class to get the snake
   * @returns updated coordinates for snake in the world model
   */
  public get Snake() {
    return this.snake;
  }
}

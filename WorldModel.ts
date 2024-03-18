import Snake from "./Snake";
import IWorldView from "./IWorldView";
export default class WorldModel {
  private width_: number;
  private height_: number;
  private snake_: Snake;
  private worldview: IWorldView | null;
  /** 
   *constructs a world model with the given snake
   @param snake - snake that is being used in the model
   @param width - width of the world
   @param height - height of the world
   */
  constructor(snake: Snake, width: number, height: number) {
    this.snake_ = snake;
    this.width_ = width;
    this.height_ = height;
    this.worldview = null;
  }

  /**
   * updates the snake position based on the amount of steps moved
   * @param steps - number of steps
   */
  public update(steps: number) {
    this.snake_.move(steps);
    if (this.worldview !== null) {
      console.log(this.snake_, this.worldview);
      this.worldview.display(this);
    }
  }

  /** uses snake class to get the snake
   * @returns updated coordinates for snake in the world model
   */
  public get snake() {
    return this.snake_;
  }

  public get WorldWidth() {
    return this.width_;
    /**
     * @returns updated width of the world
     */
  }
  public get WorldHeight() {
    return this.height_;
    /**
     * @returns updated height of the world
     */
  }
  public get SnakePosition() {
    return this.snake.position;
    /**
     * @returns updated position of the snake
     * */
  }
  public get SnakeDirection() {
    return this.snake.direction;
    /**
     * @returns updated direction of the snake
     * */
  }
  public set Worldview(worldview: IWorldView) {
    this.worldview = worldview;
  }
  public set WorldWidth(value: number) {
    this.width_ = value;
  }
  public set WorldHeight(value: number) {
    this.height_ = value;
  }
}

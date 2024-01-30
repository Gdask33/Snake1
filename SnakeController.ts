import WorldModel from "./WorldModel";
import Snake from "./Snake";

/**
 * Controller class responsible for managing the Snake's actions in the game world.
 */
class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  /**
   * Constructs a new SnakeController instance.
   *
   * @param snakeWorld - The WorldModel representing the game world.
   * @param slitherer - The Snake that this controller manages.
   */
  constructor(snakeWorld: WorldModel, slitherer: Snake) {
    this.snakeWorld = snakeWorld;
    this.slitherer = slitherer;
  }

  /**
   * Turns the Snake to the left.
   */
  public turnSnakeLeft() {
    this.slitherer.turnLeft();
  }

  /**
   * Turns the Snake to the right.
   */
  public turnSnakeRight() {
    this.slitherer.turnRight();
  }

  /**
   * Retrieves the position of the Snake.
   *
   * @returns The position of the Snake as a Point.
   */
  public getsnakePosition() {
    return this.snakeWorld.getSnake().getposition();
  }

  /**
   * Retrieves the direction in which the Snake is currently moving.
   *
   * @returns The direction of the Snake as a string ("up", "down", "left", or "right").
   */
  public getsnakeDirection() {
    return this.snakeWorld.getSnake().getdirection();
  }

  /**
   * Retrieves the width of the game world.
   *
   * @returns The width of the game world.
   */
  public getworldWidth() {
    return this.snakeWorld.getWorldWidth();
  }

  /**
   * Retrieves the height of the game world.
   *
   * @returns The height of the game world.
   */
  public getworldHeight() {
    return this.snakeWorld.getWorldHeight();
  }

  /**
   * Retrieves the Snake that this controller manages.
   *
   * @returns The Snake object.
   */
  public getsnake() {
    return this.snakeWorld.getSnake();
  }

  /**
   * Retrieves the WorldModel representing the game world.
   *
   * @returns The WorldModel object.
   */
  public getWorldModel() {
    return this.snakeWorld;
  }
}

export default SnakeController;

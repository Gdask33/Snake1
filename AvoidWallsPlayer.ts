import Player from "./Player";
import SnakeController from "./SnakeController";

/**
 * A class representing a player that avoids walls in a snake game.
 * It extends the Player class and uses the SnakeController to manage the snake's movement.
 */
class AvoidWallsPlayer extends Player {
  /**
   * Constructs an AvoidWallsPlayer instance.
   * @param {SnakeController} snakeController - An instance of SnakeController to control the snake.
   */
  constructor(snakeController: SnakeController) {
    super(snakeController); // Call the parent class constructor
    this.sc = snakeController; // Store the SnakeController instance for later use
  }

  /**
   * Determines and makes the next turn for the snake, avoiding walls.
   */
  makeTurn(): void {
    // Retrieve the current state of the snake and the game world
    const snake = this.sc.getsnake();
    const snakeDirection: string = this.sc.getsnakeDirection();
    const worldModel = this.sc.getWorldModel();
    const position = this.sc.getsnakePosition();
    const worldHeight = worldModel.getWorldHeight();
    const worldWidth = worldModel.getWorldWidth();

    // Logic to avoid walls based on the snake's current direction and position
    if (snakeDirection === "left" && position.x === -(worldWidth - 1)) {
      // If the snake is moving left and at the left edge, turn it around
      this.sc.turnSnakeRight();
    } else if (snakeDirection === "right" && position.x === worldWidth - 1) {
      // If the snake is moving right and at the right edge, turn it right
      this.sc.turnSnakeLeft();
    } else if (snakeDirection === "up" && position.y === worldHeight - 1) {
      // If the snake is moving up and at the top edge, turn it around
      this.sc.turnSnakeRight();
    } else if (snakeDirection === "down" && position.y === -(worldHeight - 1)) {
      // If the snake is moving down and at the bottom edge, turn it around
      this.sc.turnSnakeLeft();
    }
  }
}

export default AvoidWallsPlayer;

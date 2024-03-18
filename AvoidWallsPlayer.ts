import Player from "./Player";
import SnakeController from "./SnakeController";
import Snake from "./Snake";

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
    const snakeDirection: string = this.sc.snakeDirection;
    const worldModel = this.sc.WorldModel;
    const position = this.sc.snakePosition;
    const worldHeight = worldModel.WorldHeight;
    const worldWidth = worldModel.WorldWidth;

    // Logic to avoid walls based on the snake's current direction and position
    if (
      snakeDirection === "left" &&
      position.x <= 0 &&
      position.y <= worldHeight / 2
    ) {
      console.log("left");
      this.sc.turnSnakeDown();
    } else if (
      snakeDirection === "right" &&
      position.x >= worldWidth - 1 &&
      position.y <= worldHeight / 2
    ) {
      this.sc.turnSnakeDown();
    } else if (
      snakeDirection === "right" &&
      position.x >= worldWidth - 1 &&
      position.y > worldHeight / 2
    ) {
      this.sc.turnSnakeUp();
    } else if (snakeDirection === "up" && position.y <= 0 && position.x <= 0) {
      this.sc.turnSnakeRight();
    } else if (
      snakeDirection === "up" &&
      position.y < 1 &&
      position.x > worldWidth / 2
    ) {
      this.sc.turnSnakeLeft(); //problem
    } else if (
      snakeDirection === "up" &&
      position.y >= worldHeight - 1 &&
      position.x <= worldWidth / 2
    ) {
      this.sc.turnSnakeUp();
    } else if (snakeDirection === "up" && position.y <= 0 && position.x <= 0) {
      this.sc.turnSnakeRight();
    } else if (
      snakeDirection === "down" &&
      position.y >= worldHeight - 1 &&
      position.x > worldWidth / 2
    ) {
      this.sc.turnSnakeLeft();
      console.log("Hello");
    } else if (
      snakeDirection === "down" &&
      position.y >= worldHeight - 1 &&
      position.x < worldWidth / 2
    ) {
      this.sc.turnSnakeRight();
    } else if (
      snakeDirection === "left" &&
      position.x <= 0 &&
      position.y > worldHeight / 2
    ) {
      this.sc.turnSnakeUp(); //problem
      console.log("Hello");
      console.log("i", worldWidth, worldHeight);
    }
  }
}

export default AvoidWallsPlayer;

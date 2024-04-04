import Snake from "./Snake";
import IWorldView from "./IWorldView";
export default class WorldModel {
  private allSnakes: Snake[];
  private allViews: IWorldView[];
  private width_: number;
  private height_: number;
  constructor(width: number, height: number) {
    this.width_ = width;
    this.height_ = height;
    this.allSnakes = [];
    this.allViews = [];
  }
  public addSnakes(snakes: Snake[]) {
    this.allSnakes = this.allSnakes.concat(snakes);
  }
  public addViews(views: IWorldView[]) {
    this.allViews = this.allViews.concat(views);
  }
  public get snakes() {
    return this.allSnakes;
  }
  public get position() {
    return this.allSnakes[0].position;
  }
  public get views() {
    return this.allViews;
  }
  public get WorldWidth() {
    return this.width_;
  }
  public get WorldHeight() {
    return this.height_;
  }
  public update(steps: number) {
    let collidedArray: Snake[] = [];
    // Iterate over allSnakes and call move on each Snake instance
    this.allSnakes.forEach((snake) => {
      snake.move(steps);
    });

    this.allSnakes.forEach((snake) => {
      this.allSnakes.forEach((other) => {
        if (snake !== other && snake.didCollide(other)) {
          // Avoid adding the same snake more than once
          if (!collidedArray.includes(snake)) {
            collidedArray.push(snake);
            console.log("COLLISION", collidedArray);
          }
        }
      });
    });
    // Remove collided snakes
    collidedArray.forEach((collided) => {
      const index = this.allSnakes.indexOf(collided);
      if (index > -1) {
        this.allSnakes.splice(index, 1);
      }
    });

    // Update all views once after handling game logic
    this.allViews.forEach((view) => {
      view.display(this);
    });

    console.log(this.allSnakes);
  }
}

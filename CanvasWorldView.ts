import { clear } from "console";
import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";
export default class WorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }
  public display(model: WorldModel): void {
    this.worldCanvas.width = model.WorldWidth * this.scalingFactor;
    this.worldCanvas.height = model.WorldHeight * this.scalingFactor;

    this.context.clearRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
    this.context.fillStyle = "black"; // For example, setting the color to white
    console.log(this.worldCanvas.width, this.worldCanvas.height);

    // Draw a filled rectangle
    // Parameters: x-coordinate, y-coordinate, width, height
    this.context.fillRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    ); // Draw the world with the specified dimensions (model.WorldWidth, model.WorldHeight);
    console.log("Dimensions:", this.worldCanvas.width, this.worldCanvas.height);

    const position = model.SnakePosition;
    console.log("Position:", position);

    // Draw the snake's head based on the scaling factor
    this.context.fillStyle = "green"; // Set the color for the snake
    this.context.fillRect(
      position.x * this.scalingFactor,
      position.y * this.scalingFactor,
      this.scalingFactor,
      this.scalingFactor,
    );
    console.log("n", position.x * this.scalingFactor);
    console.log("m", position.y * this.scalingFactor);
  }
  public get scaleFactor(): number {
    return this.scalingFactor;
  }

  public get canvas(): HTMLCanvasElement {
    return this.worldCanvas;
  }

  public get conText(): CanvasRenderingContext2D {
    return this.context;
  }
  public set canvas(value: HTMLCanvasElement) {
    this.worldCanvas = value;
  }

  public set conText(value: CanvasRenderingContext2D) {
    this.context = value;
  }
}

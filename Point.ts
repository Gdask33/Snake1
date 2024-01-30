export default class Point {
  private x_coordinate: number;
  private y_coordinate: number; // Corrected typo in 'y_coordinate'

  constructor(x: number, y: number) {
    this.x_coordinate = x;
    this.y_coordinate = y;
  }

  public get x() {
    /**
     * Gets the x coordinate of the point.
     * @returns the x coordinate
     */
    return this.x_coordinate;
  }

  public get y() {
    /**
     * Gets the y coordinate of the point.
     * @returns the y coordinate
     */
    return this.y_coordinate;
  }

  public getPosition(): Point {
    /**
     * Gets the position of the point.
     * @returns a new Point object with the same coordinates
     */
    return new Point(this.x_coordinate, this.y_coordinate);
  }
}

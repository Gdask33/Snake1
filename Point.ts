export default class Point {
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
  
    public get x() {
      return this.x_coordinate;
      /**
       * gets the x coordinate of the point
       * @returns the x coordinate
       */
    }
  
    public get y() {
      return this.y_corrdinate;
      /**
       * gets the y coordinate of the point
       * @returns the y coordinate
       */
    }
  }
  
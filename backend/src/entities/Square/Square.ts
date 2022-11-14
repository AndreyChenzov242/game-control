import { Direction, IPosition } from "../../models/";

import { config } from "./config";

export class Square {
  private position: IPosition;
  private step = config.moveStep;

  constructor() {
    this.position = { x: 0, y: 0 };
  }

  public getPosition(): IPosition {
    return this.position;
  }

  public move(direction: Direction) {
    switch (direction) {
      case Direction.DOWN:
        this.position.y += this.step;
        break;

      case Direction.UP:
        this.position.y -= this.step;
        break;

      case Direction.RIGHT:
        this.position.x += this.step;
        break;

      case Direction.LEFT:
        this.position.x -= this.step;
        break;

      default:
        break;
    }
  }
}

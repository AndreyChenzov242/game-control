import { hostname } from "../../hostname";

import "./styles.scss";

export const ControllerPage = () => {
  const connection = new WebSocket(`ws://${hostname}:8080/controller`);

  const sendMessage = (message: string) => {
    connection.send(JSON.stringify(message));
  };

  const moveLeft = () => {
    sendMessage("left");
  };

  const moveRight = () => {
    sendMessage("right");
  };

  const moveUp = () => {
    sendMessage("up");
  };

  const moveDown = () => {
    sendMessage("down");
  };

  return (
    <div className="center-container">
      <div className="controller">
        <div className="directional-buttons">
          <div className="directional-buttons__middle"></div>
          <button
            className="directional-buttons__button directional-buttons__button--left"
            onClick={moveLeft}
          ></button>
          <button
            className="directional-buttons__button directional-buttons__button--top"
            onClick={moveUp}
          ></button>
          <button
            className="directional-buttons__button directional-buttons__button--right"
            onClick={moveRight}
          ></button>
          <button
            className="directional-buttons__button directional-buttons__button--bottom "
            onClick={moveDown}
          ></button>
        </div>
      </div>
    </div>
  );
};

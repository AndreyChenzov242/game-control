import { IncomingMessage } from "http";
import WebSocket, { RawData } from "ws";

import { Direction, Endpoint, IPosition } from "./models";

import { Square } from "./entities/Square";

const wss = new WebSocket.Server({ port: 8080 }, () => {
  console.log("Server listening on port 8080");
});

const square = new Square();

const controllers = new Set<WebSocket>();
const observers = new Set<WebSocket>();

wss.on("connection", (ws: WebSocket, req: IncomingMessage) => {
  if (req.url === Endpoint.CONTROLLER) {
    controllerInit(ws);
  } else if (req.url === Endpoint.SQUARE) {
    observerInit(ws);
  }
});

const sendPositionToEveryone = (position: IPosition) => {
  observers.forEach((observer) => {
    observer.send(JSON.stringify(position));
  });
};

const controllerInit = (ws: WebSocket) => {
  controllers.add(ws);

  ws.on("message", (message: RawData) => {
    const direction = JSON.parse(message.toString()) as Direction;

    square.move(direction);

    sendPositionToEveryone(square.getPosition());
  });

  ws.on("close", () => {
    controllers.delete(ws);
  });
};

const observerInit = (ws: WebSocket) => {
  observers.add(ws);

  sendPositionToEveryone(square.getPosition());

  ws.on("close", () => {
    observers.delete(ws);
  });
};

import React, { useRef } from "react";

import { hostname } from "../../hostname";

import "./styles.scss";

export const SquarePage = () => {
  const squareRef = useRef<HTMLInputElement>(null);

  const connection = new WebSocket(`ws://${hostname}:8080/square`);

  connection.onmessage = (message) => {
    const { x, y } = JSON.parse(message.data);

    if (squareRef.current) {
      squareRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <div className="center-container">
      <div className="square" ref={squareRef}></div>
    </div>
  );
};

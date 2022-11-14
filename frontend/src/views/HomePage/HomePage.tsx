import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export const HomePage = () => {
  return (
    <div className="center-container">
      <div className="content">
        <h2 className="content__title">Interface for Game Control.</h2>

        <p className="content__description">
          Adaptive web application to control game object developed using
          WebSockets.
        </p>

        <nav>
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="/controller" className="nav-list__link">
                Controller
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/square" className="nav-list__link">
                Square
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

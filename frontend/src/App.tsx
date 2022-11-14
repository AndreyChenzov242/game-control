import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ControllerPage } from "./views/ControllerPage";
import { HomePage } from "./views/HomePage";
import { SquarePage } from "./views/SquarePage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/controller" element={<ControllerPage />} />
        <Route path="/square" element={<SquarePage />} />
      </Routes>
    </Router>
  );
};

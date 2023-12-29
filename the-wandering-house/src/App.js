import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NorthfieldQuilt from './pages/northfield/northfield-quilt.js'
import LanesboroQuilt from './pages/lanesboro/lanesboro-quilt.js'
import MainMenu from './pages/main-menu/main-menu.js'
import RedWingQuilt from "./pages/redwing/redwing-quilt.js";


export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/northfield" element={<NorthfieldQuilt />} />
          <Route path="/lanesboro" element={<LanesboroQuilt />} />
          <Route path="/redwing" element={<RedWingQuilt />} />
        </Routes>
      </Router>
    );
  }
import { Routes, Route } from "react-router-dom";
import Gameboard from "../pages/Gameboard";
import Homepage from "../pages/Homepage";
import Creditspage from "../pages/Creditspage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Gameboard />} />

      <Route path="/home" element={<Homepage />} />

      <Route path="/credits" element={<Creditspage />} />
    </Routes>
  );
};

export default Routing;

import { useContext } from "react";
import "../assets/styles/Color.css";
import { AppContext } from "../context/AppContext";

const Color = () => {
  const { aliveColor, deadColor, dispatch } = useContext(AppContext);
  const handleAliveColor = (e) => {
    dispatch({
      type: "CHG_COLOR",
      payload: { type: "alive", val: e.target.value },
    });
  };
  const handleDeadColor = (e) => {
    dispatch({
      type: "CHG_COLOR",
      payload: { type: "dead", val: e.target.value },
    });
  };

  return (
    <div className="color-bar">
      <div>
        <label htmlFor="aliveColor">Alive: </label>
        <input
          type="color"
          id="aliveColor"
          value={aliveColor}
          className="color-picker"
          onChange={(e) => handleAliveColor(e)}
        />
      </div>
      <div>
        <label htmlFor="deadColor">Dead: </label>
        <input
          type="color"
          id="deadColor"
          value={deadColor}
          className="color-picker"
          onChange={(e) => handleDeadColor(e)}
        />
      </div>
    </div>
  );
};

export default Color;

import { useRef, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../assets/styles/Size.css";

const Size = () => {
  const heightInput = useRef();
  const widthInput = useRef();
  const { dispatch } = useContext(AppContext);
  const [showError, setShowError] = useState(false);
  const handleReset = () => {
    const h = parseInt(heightInput.current.value);
    const w = parseInt(widthInput.current.value);
    if (h > 40 || w > 40 || h < 3 || w < 3) {
      setShowError(true);
      return;
    }
    setShowError(false);
    dispatch({
      type: "CHG_SIZE",
      payload: {
        height: h,
        width: w,
      },
    });
  };
  return (
    <>
      <div className="size-bar">
        <div>
          <span>Height: </span>
          <input
            type="number"
            ref={heightInput}
            placeholder="3~40"
            min={3}
            max={40}
          ></input>
        </div>
        <div>
          <span>Width: </span>
          <input
            type="number"
            ref={widthInput}
            placeholder="3~40"
            min={3}
            max={40}
          ></input>
        </div>
        <button id="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      {showError && (
        <div className="error">Height and width should be in range of 3-40</div>
      )}
    </>
  );
};

export default Size;

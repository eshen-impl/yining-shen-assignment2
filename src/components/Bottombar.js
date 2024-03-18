import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "../assets/styles/Bottombar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faArrowsRotate,
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";

let intervalId;

const Bottombar = () => {
  const { dispatch, alive } = useContext(AppContext);
  const [isAuto, setIsAuto] = useState(false);
  const handleRestart = () => {
    dispatch({ type: "RESTART" });
  };

  const handleProceed = () => {
    dispatch({ type: "PROCEED" });
  };

  const handleAutoPlay = () => {
    if (isAuto) {
      clearInterval(intervalId);
      setIsAuto(false);
    } else {
      intervalId = setInterval(() => {
        dispatch({ type: "PROCEED" });
      }, 100);
      setIsAuto(true);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
      setIsAuto(false);
    };
  }, []);

  return (
    <div className="bottom-bar">
      <button id="restart" onClick={handleRestart}>
        Restart <FontAwesomeIcon icon={faArrowsRotate} />
      </button>
      <div id="alive">Alive: {alive}</div>
      <button id="progress" onClick={handleProceed}>
        Progress <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <button id="autoplay" onClick={handleAutoPlay}>
        {isAuto ? (
          <span>
            Pause <FontAwesomeIcon icon={faCirclePause} />
          </span>
        ) : (
          <span>
            Auto-play <FontAwesomeIcon icon={faCirclePlay} />
          </span>
        )}
      </button>
    </div>
  );
};

export default Bottombar;

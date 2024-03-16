import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../assets/styles/Bottombar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

const Bottombar = () => {
  const { dispatch, alive } = useContext(AppContext);
  const handleRestart = () => {
    dispatch({ type: "RESTART" });
  };
  return (
    <div className="bottom-bar">
      <button id="restart" onClick={handleRestart}>
        Restart <FontAwesomeIcon icon={faArrowsRotate} />
      </button>
      <div id="alive">Alive: {alive}</div>
      <button id="progress">
        Progress <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Bottombar;

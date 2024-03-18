import "../assets/styles/Repo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faCircle,
  faBook,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Repo = () => {
  return (
    <div>
      <a
        href="https://github.com/eshen-impl/conway"
        target="_blank"
        rel="noopener noreferrer"
        className="repo-card"
      >
        <div className="title">
          <FontAwesomeIcon
            icon={faBook}
            style={{
              color: "#112a46",
            }}
          />
          <span className="repo-title">eshenimpl/conway</span>
        </div>
        <div className="content">
          <div className="about">A simulation of Conway’s Game of Life</div>

          <div className="meta">
            <span className="lang react">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#112a46", marginRight: "5px" }}
              />
              React.js
            </span>
            <span className="fav">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#112a46", marginRight: "3px" }}
              />
              &nbsp;xx.xk
            </span>
            <span className="branch">
              <FontAwesomeIcon
                icon={faCodeBranch}
                style={{ color: "#112a46", marginRight: "3px" }}
              />
              &nbsp;x.xk
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Repo;

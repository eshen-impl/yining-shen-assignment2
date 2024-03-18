import "../assets/styles/Author.css";
import Avatar from "../assets/avataaars.png";
import Repo from "./Repo";

const Author = (props) => {
  return (
    <div className="author-card">
      <p className="name">Yining Shen</p>
      <div className="avatar-wrapper">
        <img src={Avatar} alt="author" />
      </div>
      <Repo />
    </div>
  );
};

export default Author;

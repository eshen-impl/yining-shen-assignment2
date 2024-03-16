import "../assets/styles/Cell.css";

const Cell = (props) => {
  return (
    <div className={`square`} onClick={props.handleClick}>
      <span className="status">{props.status}</span>
    </div>
  );
};

export default Cell;

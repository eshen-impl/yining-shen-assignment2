import "../assets/styles/Cell.css";

const Cell = (props) => {
  return (
    <div className={`square`} onClick={props.handleClick}>
      {props.status}
    </div>
  );
};

export default Cell;

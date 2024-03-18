import ruleDiagram from "../assets/Rules.png";
import "../assets/styles/Rule.css";

const Rule = () => {
  return (
    <div className="rule-wrapper">
      <div className="overview">
        <h1>Overview</h1>
        <p>
          Conway’s Game of Life (or just, Life, as I will call it) is a game
          that is “played” based on a grid system. Every individual location on
          the grid can be understood as a <b>cell</b>. The game, or simulation,
          occurs over iterations, or <b>generations</b>. After a generation, a
          cell may change from <b>living</b> or <b>dead</b> based on how many
          living or dead neighbors it had in a previous iteration. A{" "}
          <b>neighbor</b> is any immediately adjacent spot on the grid
          (horizontal, vertical or diagonal).
        </p>
      </div>
      <div className="rule">
        <div className="diagram">
          <img src={ruleDiagram} alt="rules" />
        </div>
        <p>Life has 4 simple rules:</p>
        <ol>
          <li>A living cell with less than two living neighbours dies. </li>
          <li>A living cell with two or three live neighbours lives. </li>
          <li>A living cell with more than three live neighbours dies.</li>
          <li>
            A dead cell with exactly three live neighbours becomes a live cell,
            as if by reproduction.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Rule;

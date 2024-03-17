import Topbar from "../components/Topbar";
import Grid from "../components/Grid";
import Bottombar from "../components/Bottombar";
import Color from "../components/Color";

const Gameboard = () => {
  return (
    <div>
      <Topbar />
      <Color />
      <Grid />
      <Bottombar />
    </div>
  );
};

export default Gameboard;

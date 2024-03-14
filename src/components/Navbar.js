import "../assets/styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <ul className="navbar">
        <li>
          <NavLink
            to="/home"
            className={`nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={`nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            Gameboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/credits"
            className={`nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            Credits
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

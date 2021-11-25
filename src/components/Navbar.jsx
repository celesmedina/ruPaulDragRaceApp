import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <img id="logoDragRace" src="/Original_Logo.png" alt="" />
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
            {/* <NavLink to="/favs">Favorites</NavLink>
            <NavLink to="/seasons">Seasons</NavLink> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

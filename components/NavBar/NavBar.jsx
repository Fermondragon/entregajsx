import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/about">
          About
        </Link>
        <Link className="li" to="/ContactPage">
          Contact
        </Link>
        <Link className="li" to="/DetailPage">
          Detail
        </Link>
      
      </ul>
    </nav>
  );
};

export default NavBar;
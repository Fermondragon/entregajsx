import "./Header.css";

import { Link } from "react-router-dom";

import img from "../../assets/Modelos/salas/sala3-750.jpg";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={img} alt="NASA logo" width={500} />.
      </Link>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import logo from "../assets/desktop/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="max-container flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default NavBar;

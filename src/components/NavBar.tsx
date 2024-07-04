import logo from "../assets/desktop/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="max-container flex items-center justify-between">
        <img src={logo} alt="logo" />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default NavBar;

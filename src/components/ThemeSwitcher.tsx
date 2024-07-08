import { useContext } from "react";
import moonIcon from "../assets/desktop/icon-moon.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import { ThemeContext } from "../pages/Layout";

const ThemeSwitcher = () => {
  const { toggleDarkTheme, toggle } = useContext(ThemeContext);
  return (
    <div className="flex items-center space-x-4">
      <img src={sunIcon} alt="sun icon" />
      <div
        onClick={toggleDarkTheme}
        className={`${
          toggle ? "justify-end" : "justify-start"
        } bg-white w-[48px] p-[5px] rounded-xl cursor-pointer flex items-center `}
      >
        <div className="bg-violet w-[14px] h-[14px] rounded-full"></div>
      </div>
      <img src={moonIcon} alt="moon icon" />
    </div>
  );
};

export default ThemeSwitcher;

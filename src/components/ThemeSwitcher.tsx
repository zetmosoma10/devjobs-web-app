import moonIcon from "../assets/desktop/icon-moon.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";

const ThemeSwitcher = () => {
  return (
    <div className="flex items-center space-x-4">
      <img src={sunIcon} alt="sun icon" />
      <div className="bg-white w-[48px] p-[5px] rounded-xl cursor-pointer flex items-center ">
        <div className="bg-violet w-[14px] h-[14px] rounded-full"></div>
      </div>
      <img src={moonIcon} alt="moon icon" />
    </div>
  );
};

export default ThemeSwitcher;

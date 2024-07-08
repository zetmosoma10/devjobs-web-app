import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { createContext, useState } from "react";

interface ThemeContextType {
  toggle: boolean;
  toggleDarkTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
export { ThemeContext };

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const toggleDarkTheme = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={`${
        toggle && "dark"
      } relative bg-light_grey dark:bg-midnight min-h-screen`}
    >
      <ThemeContext.Provider value={{ toggleDarkTheme, toggle }}>
        <NavBar />
      </ThemeContext.Provider>
      <Outlet />
    </div>
  );
};

export default Layout;

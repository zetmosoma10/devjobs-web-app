import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="relative bg-light_grey min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;

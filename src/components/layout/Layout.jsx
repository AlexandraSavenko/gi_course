import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

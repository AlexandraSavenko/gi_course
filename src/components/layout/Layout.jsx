import { gerundVerbs, infinitiveVerbs } from "../../data/data";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.layoutWrap}>
        <Header/>
      <div className={css.contentWrap}>
        <SideBar list={gerundVerbs} />
        <main>{children}</main>
        <SideBar list={infinitiveVerbs} />
      </div>
    </div>
  );
};

export default Layout;

import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.layoutWrap}>
        <Header/>
      <div className={css.contentWrap}>
        <SideBar type={"gerundVerbs"} />
        <main>{children}</main>
        <SideBar type={"infinitiveVerbs"} />
      </div>
    </div>
  );
};

export default Layout;

import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item} >
        <NavLink to="/profile" activeClassName={s.activeLinc}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to="/dialogs" activeClassName={s.activeLinc}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLinc}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLinc}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/seting" activeClassName={s.activeLinc}>Setings</NavLink>
      </div>
    </nav>
  );
};
export default NavBar;

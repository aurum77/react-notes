import "./Header.css";
import { HeaderSearchInput } from "../HeaderSearchInput";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
    <div className="header__hamburger material-symbols-outlined">
      menu
    </div>
      <img className="header__branding" src="./logo192.png" alt="Header branding image" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__text">react-notes</div>
      </Link>
      <div className="header__item--fill">
        <Link to="/search" style={{ textDecoration: "none" }}>
          <HeaderSearchInput />
        </Link>
      </div>
    </div>
  );
};

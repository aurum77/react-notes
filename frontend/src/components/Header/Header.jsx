import "./Header.css";
import { HeaderSearchInput } from "../HeaderSearchInput";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <img className="header__branding" src="./logo192.png" alt="branding" />
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

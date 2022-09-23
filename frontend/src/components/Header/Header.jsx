import "./Header.css";
import { HeaderSearch } from "../HeaderSearch";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__leftmost material-symbols-outlined">menu</div>
      <img
        className="header__branding"
        src="./logo192.png"
        alt="Header branding image"
      />
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__text">react-notes</div>
      </Link>
      <div className="header__item--fill">
        <HeaderSearch />
      </div>
      <div className="header__item material-symbols-outlined">archive</div>
      <div className="header__item material-symbols-outlined">delete</div>
      <div className="header__rightmost">
        <img
          className="header__usericon"
          src="https://external-preview.redd.it/liW4TFEad0ZONXF01u6gX8PLr9lvJT-qTK6OaW25cG4.jpg?auto=webp&s=461f514f48cd84227a7cb287a51a2648469dc9a1"
        />
      </div>
    </div>
  );
};

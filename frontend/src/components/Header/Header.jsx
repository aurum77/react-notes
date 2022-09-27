import "./Header.css";
import { HeaderSearch } from "../HeaderSearch";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleArchiveIconClick = () => {
    navigate("/archived");
  };

  const handleTrashIconClick = () => {
    navigate("/trashed");
  };

  const headerText = () => {
    switch (location.pathname) {
      default:
        return "react-notes";
      case "/archived":
        return "Archived";
      case "/trashed":
        return "Recycle bin";
    }
  };

  return (
    <div className="header">
      <div className="header__item header__item--leftmost material-symbols-outlined">
        menu
      </div>
      <img
        className="header__branding"
        src="./logo192.png"
        alt="Header branding image"
      />
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__text">{headerText()}</div>
      </Link>
      <div className="header__item--fill">
        <HeaderSearch />
      </div>
      <div
        className="header__item material-symbols-outlined"
        onClick={handleArchiveIconClick}
      >
        archive
      </div>
      <div
        className="header__item material-symbols-outlined"
        onClick={handleTrashIconClick}
      >
        delete
      </div>
      <div className="header__item--rightmost">
        <img
          className="header__usericon"
          src="https://external-preview.redd.it/liW4TFEad0ZONXF01u6gX8PLr9lvJT-qTK6OaW25cG4.jpg?auto=webp&s=461f514f48cd84227a7cb287a51a2648469dc9a1"
        />
      </div>
    </div>
  );
};

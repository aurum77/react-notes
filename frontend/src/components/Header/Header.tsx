import "./Header.css";
import { HeaderSearch } from "../HeaderSearch";
import {
  Link,
  useNavigate,
  useLocation,
  NavigateFunction,
  Location,
} from "react-router-dom";
import { MouseEventHandler } from "react";

export const Header = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();

  const handleArchiveIconClick: MouseEventHandler = (): void => {
    navigate("/archived");
  };

  const handleTrashIconClick: MouseEventHandler = (): void => {
    navigate("/trashed");
  };

  const handleHomeIconClick: MouseEventHandler = (): void => {
    navigate("/");
  };

  const headerText = (): string => {
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
        alt="Header branding"
      />
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__text">{headerText()}</div>
      </Link>
      <div className="header__item--fill">
        <HeaderSearch />
      </div>
      <div
        className="header__item material-symbols-outlined"
        onClick={handleHomeIconClick}
      >
        home
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
          alt="user icon"
          src="https://external-preview.redd.it/liW4TFEad0ZONXF01u6gX8PLr9lvJT-qTK6OaW25cG4.jpg?auto=webp&s=461f514f48cd84227a7cb287a51a2648469dc9a1"
        />
      </div>
    </div>
  );
};

import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img
        className="header__branding"
        src="https://icons.iconarchive.com/icons/mathijssen/tuxlets/256/Tux-icon.png"
        alt="tux gang"
      ></img>
      <div className="header__text">react-notes</div>
    </div>
  );
};

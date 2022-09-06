import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img
        className="header__branding"
        src="./logo512.png"
        alt="tux gang"
      ></img>
      <div className="header__text">react-notes</div>
    </div>
  );
};

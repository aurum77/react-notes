import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img
        className="header__branding"
        src="./logo192.png"
        alt="branding"
      ></img>
      <div className="header__text">react-notes</div>
    </div>
  );
};

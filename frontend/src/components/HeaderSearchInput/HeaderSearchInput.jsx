import "./HeaderSearchInput.css";

export const HeaderSearchInput = () => {
  return (
    <div className="noteSearchInput">
    <div className="noteSearchInput__box">
      <div className="noteSearchInput__icon material-symbols-outlined">search</div>
      <input className="noteSearchInput__search" placeholder="Search for notes" />
    </div>

    </div>
  );
};

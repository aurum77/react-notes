import "./HeaderSearchInput.css";
import { useState } from "react";

export const HeaderSearchInput = () => {
  const [focused, setFocused] = useState(false);

  const handleSearchBoxFocus = () => {
    setFocused(!focused);
  };

  return (
    <div className="noteSearchInput">
      <div className={`noteSearchInput__box ${focused ? "noteSearchInput__box--focused" : ""}`}>
        <div className="noteSearchInput__icon material-symbols-outlined">
          search
        </div>
        <input
          className="noteSearchInput__search"
          placeholder="Search for notes"
          onFocus={handleSearchBoxFocus}
          onBlur={handleSearchBoxFocus}
        />
      </div>
    </div>
  );
};

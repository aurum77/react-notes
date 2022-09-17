import "./HeaderSearchInput.css";
import { useState, useContext } from "react";
import SearchContext from "../../contexts/SearchContext";

export const HeaderSearchInput = () => {
  const [focused, setFocused] = useState(false);
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleSearchBoxFocus = () => {
    setFocused(!focused);
  };

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="noteSearchInput">
      <div
        className={`noteSearchInput__box ${
          focused ? "noteSearchInput__box--focused" : ""
        }`}
      >
        <div className="noteSearchInput__icon material-symbols-outlined">
          search
        </div>
        <input
          className="noteSearchInput__search"
          placeholder="Search for notes"
          onFocus={handleSearchBoxFocus}
          onBlur={handleSearchBoxFocus}
          onChange={handleSearchValue}
          value={searchValue}
        />
      </div>
    </div>
  );
};

import "./HeaderSearch.css";
import { useState, useContext } from "react";
import SearchContext from "../../contexts/SearchContext";

export const HeaderSearch = () => {
  const [focused, setFocused] = useState(false);
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleSearchBoxFocus = () => {
    setFocused((focused) => !focused);
  };

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="headerSearch">
      <div
        className={`headerSearch__box ${
          focused ? "headerSearch__box--focused" : ""
        }`}
      >
        <div className="headerSearch__icon material-symbols-outlined">
          search
        </div>
        <input
          className="headerSearch__input"
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

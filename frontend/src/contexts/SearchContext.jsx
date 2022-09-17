import { useState, createContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const state = {
    searchValue,
    setSearchValue,
  };

  return (
    <SearchContext.Provider value={state}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;

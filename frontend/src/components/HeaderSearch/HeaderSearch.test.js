import { render, screen } from "@testing-library/react";
import SearchContext from "../../contexts/SearchContext";
import { HeaderSearch } from "./HeaderSearch";

const searchState = {
  searchValue: "foo",
};

const renderHeaderSearch = () => {
  return render(
    <SearchContext.Provider value={searchState}>
      <HeaderSearch />
    </SearchContext.Provider>
  );
};

describe("HeaderSearch", () => {
  it("should have a search icon", () => {
    renderHeaderSearch();
    const searchIcon = screen.getAllByText("search");
    expect(searchIcon).toBeInTheDocument;
  });

  it("should have a search input", () => {
    renderHeaderSearch();
    const searchInput = screen.getByPlaceholderText(/search for notes/i);
    expect(searchInput).toBeInTheDocument;
  });
});

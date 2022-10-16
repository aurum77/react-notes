import { render, RenderResult, screen } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchProvider } from "../../contexts/SearchContext";

function renderHeader(): RenderResult {
  return render(
    <Router>
      <SearchProvider>
        <Header />
      </SearchProvider>
    </Router>
  );
}

describe("Header", () => {
  it("should show branding image", () => {
    renderHeader();
    const headerImg = screen.getByAltText(/header branding/i);
    expect(headerImg).toBeInTheDocument;
  });

  it("should show branding text", () => {
    renderHeader();
    const headerText = screen.getByText(/react-notes/i);
    expect(headerText).toBeInTheDocument;
  });

  it("should show header search input", () => {
    renderHeader();
    const headerSearchInput = screen.getByPlaceholderText(/search for notes/i);
    expect(headerSearchInput).toBeInTheDocument;
  });

  it("should show user icon", () => {
    renderHeader();
    const userIcon = screen.getByAltText("user icon");
    expect(userIcon).toBeInTheDocument;
  });
});

import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("NotFound", () => {
  it("should show the not found image", () => {
    render(<NotFound />);
    const notfoundImg = screen.getAllByAltText("a cat hiding under some paper");
    expect(notfoundImg).toBeInTheDocument;
  });

  it("should show the not found text", () => {
    render(<NotFound />);
    const notFoundText = screen.getByText(/not found/i);
    expect(notFoundText).toBeInTheDocument;
  })
});

import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should have footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText("© 2022 Made with 💓 by aurum77");
    expect(footerText).toBeInTheDocument;
  });
});

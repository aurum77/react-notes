import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading", () => {
  it("should render loading text", () => {
    render(<Loading />);
    const loadingText = screen.getByText("Loading Notes");
    expect(loadingText).toBeInTheDocument;
  });
});

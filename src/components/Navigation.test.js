import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders List link", () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/List/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders Register Form link", () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});

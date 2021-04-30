import { render, screen } from "@testing-library/react";
import List from "./List";

test('renders in Register List "First Name"', () => {
  render(<List />);
  const linkElement = screen.getByText(/First Name/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register List "Last Name"', () => {
  render(<List />);
  const linkElement = screen.getByText(/Last Name/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register List "Email"', () => {
  render(<List />);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register List "Password"', () => {
  render(<List />);
  const linkElement = screen.getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register List "Gender"', () => {
  render(<List />);
  const linkElement = screen.getByText(/Gender/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register List "Birthday"', () => {
  render(<List />);
  const linkElement = screen.getByText(/Birthday/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register List "About"', () => {
  render(<List />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

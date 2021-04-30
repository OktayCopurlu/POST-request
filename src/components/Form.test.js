import { render, screen } from "@testing-library/react";
import Form from "./Form";


test('renders in Register Form "First Name"', () => {
  render(<Form />);
  const linkElement = screen.getByLabelText(/First Name/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register Form "Last Name"', () => {
  render(<Form />);
  const linkElement = screen.getByLabelText(/Last Name/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register Form "Email"', () => {
  render(<Form />);
  const linkElement = screen.getByLabelText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register Form "Password"', () => {
  render(<Form />);
  const linkElement = screen.getByLabelText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register Form "Gender"', () => {
  render(<Form />);
  const linkElement = screen.getByLabelText(/Gender/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders in Register Form "Birthday"', () => {
    render(<Form />);
    const linkElement = screen.getByLabelText(/Birthday/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders in Register Form "About"', () => {
    render(<Form />);
    const linkElement = screen.getByLabelText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });

  

 
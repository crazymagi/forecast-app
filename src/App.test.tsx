import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock("./components/report", () => ({
  Report: () => {
    return <div data-testid="report"/>;
  },
}));

test('renders matches snapshot', () => {
  const {asFragment} = render(<App />)
  expect(asFragment()).toMatchSnapshot();
});

test('renders the report', () => {
  render(<App />);
  const reportElement = screen.getByTestId('report');
  expect(reportElement).toBeInTheDocument();
});

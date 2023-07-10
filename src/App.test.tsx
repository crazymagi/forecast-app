import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const reportElement = screen.getByText(/Report/i);
  expect(reportElement).toBeInTheDocument();
});

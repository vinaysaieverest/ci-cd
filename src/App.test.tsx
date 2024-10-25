import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('heading');
  expect(linkElement).toBeInTheDocument();
  const linkElement1 = screen.getByTestId('subheading');
  expect(linkElement1).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title text', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Dragon Warrior Randomizer Tracker/i);
  expect(text).toBeInTheDocument();
});

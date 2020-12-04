import React from 'react';
import { render } from '@testing-library/react';
import DragonWarriorRandomizerTracker from './DragonWarriorRandomizerTracker';

test('renders title text', () => {
  const { getByText } = render(<DragonWarriorRandomizerTracker />);
  const text = getByText(/Dragon Warrior Randomizer Tracker/i);
  expect(text).toBeInTheDocument();
});

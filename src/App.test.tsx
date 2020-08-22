import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import INITIAL_STATE from './store/initial-state';
import { data } from './__tests__/utils';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn((fn) => fn({ ...INITIAL_STATE }))
}));

(window as any).fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React GitHub Issues by William/i);
  expect(linkElement).toBeInTheDocument();
});

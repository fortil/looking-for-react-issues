import React from 'react';
import { render, fireEvent, screen, queryByAttribute } from '@testing-library/react';

import { data } from '../utils';
import Search from '../../components/Search';
import INITIAL_STATE from '../../store/initial-state';

const getById = queryByAttribute.bind(null, 'id');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn((fn) => fn({ ...INITIAL_STATE, ISSUES: data })),
  useDispatch: jest.fn(),
}));

describe('<Search />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should render ok a empty without text', () => {
    render(<Search />);
    expect(screen.getByRole('searchbox')).toBeEmpty();
  });

  test('type something without result', async () => {
    const text = 'testing something';
    const { container } = render(<Search />);
    const autoComplete = getById(container, 'auto-complete');
    if (autoComplete) {
      fireEvent.change(autoComplete, { target: { value: text } });
      expect(screen.getByDisplayValue(text)).toBeTruthy();
      expect(container.querySelectorAll('ul')[0]).toBeUndefined();
      expect(screen.getByText('No options')).toBeTruthy();
    }
  });
  test('type something with results', async () => {
    const text = 'add';
    const { container } = render(<Search />);
    const autoComplete = getById(container, 'auto-complete');
    if (autoComplete) {
      fireEvent.change(autoComplete, { target: { value: text } });
      expect(screen.getByDisplayValue(text)).toBeTruthy();
      expect(screen.getByRole('listbox')).toBeTruthy();
      expect(container.querySelectorAll('.MuiAutocomplete-noOptions')[0]).toBeUndefined();
    }
  });
});
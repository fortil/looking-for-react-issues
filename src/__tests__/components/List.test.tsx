import React from 'react';
import { render, fireEvent, waitForElement, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import { data } from '../utils';
import List from '../../components/List';
import INITIAL_STATE from '../../store/initial-state';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn((fn) => fn({ ...INITIAL_STATE }))
}));

describe('<List />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should render ok a empty list without loading', async () => {
    render(<List />);
    expect(screen.getByRole('list')).toBeEmpty();
  });
  test('should render ok a empty list with loading', async () => {
    (useSelector as any).mockImplementation((fn: any) => fn({ ...INITIAL_STATE, LOADING: true }));
    render(<List />);
    const svg = screen.queryByText('svg');
    expect(svg).toBeNull();
  });
  test('should render ok a list of items', async () => {
    (useSelector as any).mockImplementation((fn: any) => fn({ ...INITIAL_STATE, ISSUES_SELECTED: data }));
    render(<List />);
    expect(screen.getByRole('list')).not.toBeEmpty();
  });
});
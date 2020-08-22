import React from 'react';
import { render, screen } from '@testing-library/react';

import Title from '../../components/Title';

describe('<Title />', () => {
  test('should render ok the text "React GitHub Issues by William"', () => {
    render(<Title />);
    expect(screen.getByRole('heading')).toHaveTextContent('React GitHub Issues by William');
  });
});
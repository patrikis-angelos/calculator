import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../../components/Display';
import { render } from '@testing-library/react';
import  '@testing-library/jest-dom';

describe('Display', () => {
  it('renders correctly', () => {
    const tree = renderer
    .create(<Display />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with default value 0', () => {
    const { container } = render(<Display />);
    const display = container.querySelector('div');
    expect(display).toHaveTextContent('0');
  });
});
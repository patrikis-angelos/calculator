import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';
import '@testing-library/jest-dom';

const test = () => {};

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button name="1" clickHandler={test} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with the given name', () => {
    render(<Button name="test" clickHandler={test} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('test');
  });
});

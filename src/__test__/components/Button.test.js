import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

const test = () => {}

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
    .create(<Button name='1' clickHandler={test}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
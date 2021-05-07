import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

const test = () => {}

describe('ButtonPanel', () => {
  it('renders correctly', () => {
    const tree = renderer
    .create(<ButtonPanel clickHandler={test}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
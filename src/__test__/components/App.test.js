import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../components/App';

const test = () => {}

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer
    .create(<App />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
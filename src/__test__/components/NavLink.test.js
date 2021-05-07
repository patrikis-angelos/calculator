import React from 'react';
import renderer from 'react-test-renderer';
import NavLink from '../../components/NavLink';

describe('NavLink', () => {
  it('renders correctly', () => {
    const tree = renderer
    .create(<NavLink path='/' name='test'/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
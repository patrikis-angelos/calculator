import React from 'react';
import PropTypes from 'prop-types';

const NavLink = (props) => {
  const { name, path } = props;
  return (
    <a className="m-l-10 link" href={path}>{name}</a>
  );
};

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavLink;

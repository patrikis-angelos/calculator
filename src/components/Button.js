import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;
  const handleClick = (button) => clickHandler(button);
  return (
    <button
      className="button"
      type="button"
      onClick={handleClick.bind(this, name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;

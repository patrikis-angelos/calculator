import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, color, wide, clickHandler,
  } = props;
  const handleClick = (button) => clickHandler(button);
  return (
    <button
      className={`button ${color} ${wide}`}
      type="button"
      onClick={handleClick.bind(this, name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: '',
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (button) => (
    props.clickHandler(button)
  );
  return (
    <div className="panel">
      <div className="flex height-100">
        <Button color="gray" name="AC" clickHandler={handleClick} />
        <Button color="gray" name="+/-" clickHandler={handleClick} />
        <Button color="gray" name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="flex height-100">
        <Button color="gray" name="7" clickHandler={handleClick} />
        <Button color="gray" name="8" clickHandler={handleClick} />
        <Button color="gray" name="9" clickHandler={handleClick} />
        <Button name="*" clickHandler={handleClick} />
      </div>
      <div className="flex height-100">
        <Button color="gray" name="4" clickHandler={handleClick} />
        <Button color="gray" name="5" clickHandler={handleClick} />
        <Button color="gray" name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="flex height-100">
        <Button color="gray" name="1" clickHandler={handleClick} />
        <Button color="gray" name="2" clickHandler={handleClick} />
        <Button color="gray" name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="flex height-100">
        <Button wide="wide" color="gray" name="0" clickHandler={handleClick} />
        <Button color="gray" name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

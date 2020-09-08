import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  function handleClick(buttonName) {
    return props.clickHandler(buttonName);
  }

  return (
    <div className="button-panel">
      <div className="row">
        <Button clickHandler={handleClick} name="AC" color />
        <Button clickHandler={handleClick} name="+/-" color />
        <Button clickHandler={handleClick} name="%" color />
        <Button clickHandler={handleClick} name="÷" />
      </div>
      <div className="row">
        <Button clickHandler={handleClick} name="7" color />
        <Button clickHandler={handleClick} name="8" color />
        <Button clickHandler={handleClick} name="9" color />
        <Button clickHandler={handleClick} name="×" />
      </div>
      <div className="row">
        <Button clickHandler={handleClick} name="4" color />
        <Button clickHandler={handleClick} name="5" color />
        <Button clickHandler={handleClick} name="6" color />
        <Button clickHandler={handleClick} name="-" />
      </div>
      <div className="row">
        <Button clickHandler={handleClick} name="1" color />
        <Button clickHandler={handleClick} name="2" color />
        <Button clickHandler={handleClick} name="3" color />
        <Button clickHandler={handleClick} name="+" />
      </div>
      <div className="row">
        <Button clickHandler={handleClick} name="0" color wide />
        <Button clickHandler={handleClick} name="." color />
        <Button clickHandler={handleClick} name="=" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

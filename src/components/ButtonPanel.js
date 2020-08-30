import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="button-panel">
      <div className="row">
        <Button name="AC" color />
        <Button name="+/-" color />
        <Button name="%" color />
        <Button name="÷" />
      </div>
      <div className="row">
        <Button name="7" color/>
        <Button name="8" color />
        <Button name="9" color />
        <Button name="×" />
      </div>
      <div className="row">
        <Button name="4" color />
        <Button name="5" color />
        <Button name="6" color />
        <Button name="-" />
      </div>
      <div className="row">
        <Button name="1" color />
        <Button name="2" color />
        <Button name="3" color />
        <Button name="+" />
      </div>
      <div className="row">
        <Button name="0" color wide />
        <Button name="." color />
        <Button name="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;

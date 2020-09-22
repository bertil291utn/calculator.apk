import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="component-button-panel">
    <div className="g-1">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
    </div>
    <div className="g-2">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" />
    </div>
    <div className="g-3">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
    </div>
    <div className="g-4">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" />
    </div>
    <div className="g-5">
      <Button name="0" />
      <Button name="." />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;

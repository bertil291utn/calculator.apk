import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = () => (
  <div className="component-button-panel">
    <div className="buttonsGroupStyle g-1">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" orange />
    </div>
    <div className="buttonsGroupStyle g-2">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" orange />
    </div>
    <div className="buttonsGroupStyle g-3">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" orange />
    </div>
    <div className="buttonsGroupStyle g-4">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" orange />
    </div>
    <div className="buttonsGroupStyle g-5">
      <Button name="0" wider />
      <Button name="." />
      <Button name="=" orange />
    </div>
  </div>
);

export default ButtonPanel;

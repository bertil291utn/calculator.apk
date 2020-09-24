/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = ({ handleClick }) => {
  const buttonPanel = [
    {
      group: 'g-1',
      buttons: ['AC', '+/-', '%', '÷'],
    },
    {
      group: 'g-2',
      buttons: ['7', '8', '9', 'X'],
    },
    {
      group: 'g-3',
      buttons: ['4', '5', '6', '-'],
    },
    {
      group: 'g-4',
      buttons: ['1', '2', '3', '+'],
    },
    {
      group: 'g-5',
      buttons: ['0', '.', '='],
    },
  ];

  return (
    <div className="component-button-panel">
      {buttonPanel.map(elem => (
        <div key={elem.group} className={`buttonsGroupStyle ${elem.group}`}>
          {elem.buttons.map((nextElem, index) => {
            if (index === elem.buttons.length - 1) return <Button key={nextElem} name={nextElem} orange handleClick={handleClick} />;
            if (nextElem === '0') return <Button key={nextElem} name={nextElem} wide handleClick={handleClick} />;
            return <Button key={nextElem} name={nextElem} handleClick={handleClick} />;
          })}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default ButtonPanel;

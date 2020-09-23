/* eslint-disable max-len */
import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = () => {
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
            if (index === elem.buttons.length - 1) return <Button key={nextElem} name={nextElem} orange />;
            if (nextElem === '0') return <Button key={nextElem} name={nextElem} wide />;
            return <Button key={nextElem} name={nextElem} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;

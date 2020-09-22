import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const { name, orange, wide } = props;
  let widerInitialVal = 'button-container';
  const widerClass = wide ? (widerInitialVal += ' wider') : widerInitialVal;
  let orangeInitialVal = 'button-content';
  const orangeClass = orange ? (orangeInitialVal += ' orange') : orangeInitialVal;
  return (
    <div className={widerClass}>
      <button type="button" className={orangeClass}>
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  orange: false,
  wide: false,
};

export default Button;

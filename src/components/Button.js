import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

const Button = props => {
  const { name, orange, wider } = props;
  let widerInitialVal = 'button-container'
  const widerClass = wider ? (widerInitialVal += ' wider') : widerInitialVal;
  let orangeInitialVal = 'button-content'
  const orangeClass = orange ? (orangeInitialVal += ' orange') : orangeInitialVal;
  return (
    <div className={widerClass}>
      <button type="button" className={orangeClass}>
        {name}
      </button>
    </div >
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  orange: PropTypes.bool,
  wider: PropTypes.bool,
};

Button.defaultProps = {
  orange: false,
  wider: false,
};

export default Button;

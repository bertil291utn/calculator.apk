import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = props => {
  const { value } = props;
  return (
    <div className="display-component">
      <div className="display-container">
        {value}
      </div>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;

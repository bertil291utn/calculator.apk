import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { value } = props;
  return (
    <div className="component-display">
      <div>
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

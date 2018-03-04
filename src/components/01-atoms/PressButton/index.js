import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const PressButton = ({ onClick, color }) => (
  <button className={`My__PressButton My__BackgroundColor__${color}`} onClick={onClick}></button>
);

PressButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['Red', 'Yellow']).isRequired,
};

export default PressButton;
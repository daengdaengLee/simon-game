import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const PressButton = ({ onClick }) => (
  <button className="My__PressButton" onClick={onClick}></button>
);

PressButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PressButton;
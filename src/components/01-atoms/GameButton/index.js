import React from 'react';
import PropType from 'prop-types';

import './style.css';

const GameButton = ({ color, onClick }) => <button
  className={`My__GameButton My__Background__${color}`}
  onClick={onClick}
></button>;

GameButton.propTypes = {
  color: PropType.oneOf(['Red', 'Yellow', 'Green', 'Blue']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GameButton;
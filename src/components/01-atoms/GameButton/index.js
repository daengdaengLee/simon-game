import React from 'react';
import PropType from 'prop-types';

import './style.css';

const GameButton = ({ color }) => <button
  className={`My__GameButton My__Background__${color}`}
></button>;

GameButton.propTypes = {
  color: PropType.oneOf(['Red', 'Yellow', 'Green', 'Blue']).isRequired,
};

export default GameButton;
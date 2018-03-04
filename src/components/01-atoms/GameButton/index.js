import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const GameButton = ({ color, onClick, active }) => {
  let myClassName = `My__GameButton My__Background__${color}`;
  if(active) myClassName += ' active';
  return <button
    className={myClassName}
    onClick={onClick}
  ></button>
};

GameButton.propTypes = {
  color: PropTypes.oneOf(['Red', 'Yellow', 'Green', 'Blue']).isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default GameButton;
import React from 'react';
import PropTypes from 'prop-types';

import GameDeviceTemplate from '../../04-templates/GameDevice';
import Heading from '../../01-atoms/Heading';
import GameConsole from '../../03-organisms/GameConsole';
import GameBoard from '../../02-molecules/GameBoard';

const GameDevice = ({ start, display, playerInput, activeButton, strict }) => <GameDeviceTemplate
  gameHeading={<Heading headingNo={1}>Simon</Heading>}
  gameConsole={<GameConsole start={start} display={display} strict={strict} />}
  gameController={<GameBoard playerInput={playerInput} activeButton={activeButton} />}
/>;

GameDevice.propTypes = {
  start: PropTypes.func.isRequired,
  display: PropTypes.node,
  playerInput: PropTypes.func.isRequired,
  activeButton: PropTypes.oneOf([1, 2, 3, 4]),
};

export default GameDevice;
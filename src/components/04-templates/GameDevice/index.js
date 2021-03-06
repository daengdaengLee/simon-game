import React from 'react';
import PropTypes from 'prop-types';

import Col from '../../01-atoms/Col';

const GameDevice = ({ gameConsole, gameController, gameHeading }) => (
  <Col alignItems="Center" justifyContent="Center" height="100%">
    <Col alignItems="Center" justifyContent="SpaceAround" width="14rem" height="26rem" border="3px solid #495057" borderRadius="0.2rem" backgroundColor="#ADB5BD">
      {gameHeading}
      {gameConsole}
      {gameController}
    </Col>
  </Col>
);

GameDevice.propTypes = {
  gameConsole: PropTypes.node.isRequired,
  gameController: PropTypes.node.isRequired,
  gameHeading: PropTypes.node.isRequired,
};

export default GameDevice;
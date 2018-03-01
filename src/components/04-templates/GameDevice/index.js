import React from 'react';

import Col from '../../01-atoms/Col';

const GameDevice = ({ gameConsole, gameController, gameHeading }) => (
  <Col>
    {gameHeading}
    {gameConsole}
    {gameController}
  </Col>
);

export default GameDevice;
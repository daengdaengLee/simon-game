import React from 'react';

import Col from '../../01-atoms/Col';

const GameDevice = ({ gameConsole, gameController }) => (
  <Col>
    {gameConsole}
    {gameController}
  </Col>
);

export default GameDevice;
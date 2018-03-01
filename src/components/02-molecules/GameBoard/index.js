import React from 'react';
import PropTypes from 'prop-types';

import GameButton from '../../01-atoms/GameButton';
import Row from '../../01-atoms/Row';
import Col from '../../01-atoms/Col';

const GameBoard = ({ activeButton, playerInput }) => {
  return (
    <Col height="9rem" width="9rem" justifyContent="SpaceBetween" backgroundColor="#222222" border="1rem solid #222222" borderRadius="0.2rem">
      <Row justifyContent="SpaceBetween" backgroundColor="#222222">
        <GameButton
          active={activeButton === 1}
          color="Red"
          onClick={() => playerInput(1)}
        />
        <GameButton
          active={activeButton === 2}
          color="Yellow"
          onClick={() => playerInput(2)}
        />
      </Row>
      <Row justifyContent="SpaceBetween" backgroundColor="#222222">
        <GameButton
          active={activeButton === 3}
          color="Blue"
          onClick={() => playerInput(3)}
        />
        <GameButton
          active={activeButton === 4}
          color="Green"
          onClick={() => playerInput(4)}
        />
      </Row>
    </Col>
  );
};

GameBoard.propTypes = {
  activeButton: PropTypes.oneOf([1, 2, 3, 4]),
  playerInput: PropTypes.func.isRequired,
};

export default GameBoard
import React from 'react';
import PropTypes from 'prop-types';

import LabeledButton from '../../02-molecules/LabeledButton';
import Display from '../../01-atoms/Display';
import Row from '../../01-atoms/Row';
import Col from '../../01-atoms/Col';

const GameConsole = ({ display, start }) => (
  <Col justifyContent="SpaceBetween" alignItems="Center" height="7.8rem">
    <Display>{display}</Display>
    <Row justifyContent="SpaceBetween" width="7rem">
      <LabeledButton onClick={start} color="Red" label="Start" />
      <LabeledButton onClick={() => alert('net ready')} color="Yellow" label="Strict" />
    </Row>
  </Col>
);

GameConsole.propTypes = {
  display: PropTypes.any,
  start: PropTypes.func.isRequired,
};

export default GameConsole;
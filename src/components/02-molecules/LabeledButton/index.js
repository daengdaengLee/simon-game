import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../01-atoms/Label';
import PressButton from '../../01-atoms/PressButton';

const LabeledButton = ({ onClick, color, label }) => (
  <Label>
    <PressButton onClick={onClick} color={color} />
    {label.toUpperCase()}
  </Label>
);

LabeledButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['Red', 'Yellow']).isRequired,
  label: PropTypes.string.isRequired,
};

export default LabeledButton;
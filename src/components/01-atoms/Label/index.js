import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Label = ({ children }) => <label className="My__Label">{children}</label>;

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
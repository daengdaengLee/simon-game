import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ headingNo, children }) => {
  const H = `h${headingNo}`;
  return <H>{children}</H>
};

Heading.propTypes = {
  headingNo: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Heading;
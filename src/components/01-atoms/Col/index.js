import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Col = ({ children, justifyContent, alignItems }) => {
  let myClassName = 'My__Col';
  if(justifyContent) myClassName += ` My__JustifyContent__${justifyContent}`;
  if(alignItems) myClassName += ` My__AlignItems__${alignItems}`;
  return (
    <div className={myClassName}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.oneOf(['Center']),
  alignItems: PropTypes.oneOf(['Center']),
};

export default Col;
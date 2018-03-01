import React from 'react';

import './style.css';

const Row = ({ children, justifyContent, alignItems }) => {
  let myClassName = "My__Row";
  if(justifyContent) myClassName += ` My__JustifyContent__${justifyContent}`;
  if(alignItems) myClassName += ` My__AlignItems__${alignItems}`;
  return <div className={myClassName}>{children}</div>;
};

export default Row;
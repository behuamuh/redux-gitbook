import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ onClick, active, children }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Link;

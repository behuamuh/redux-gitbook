import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ onClick, active, children }) => {
  return (
    <button disabled={active} onClick={onClick}>
      {children}
    </button>
  );
};

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Link;

import React from 'react';
import PropTypes from 'prop-types';

const Toggle = (props) => {
  const cssClasses = ['navbar__toggle toggle', `toggle--${props.action}`];

  return (
    <button className={cssClasses.join(' ')} onClick={props.onClick} aria-label={props.label}>
      <span className="toggle__icon">{ props.children }</span>
    </button>
  )
};

Toggle.defaultProps = {
  action: 'default'
};

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  action: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default Toggle;

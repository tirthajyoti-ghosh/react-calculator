import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, wide, color } = props;

  const style = {
    width: wide ? '61%' : '', // width increased to 61% just to make orange buttons line up properly
    backgroundColor: color ? '' : 'orange'
  };

  return <button type="button" className="mdl-button mdl-js-button mdl-js-ripple-effect" style={ style }>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool
};

Button.defaultProps = {
  wide: false
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, wide, color } = props;

  function handleClick(buttonName) {
    return props.clickHandler(buttonName);
  }

  const style = {
    width: wide ? '50%' : '',
    backgroundColor: color ? '' : 'orange',
  };

  return (
    <button
      type="button"
      className="mdl-button mdl-js-button mdl-js-ripple-effect"
      onClick={() => { handleClick(name); }}
      style={style}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
  color: false,
};

export default Button;

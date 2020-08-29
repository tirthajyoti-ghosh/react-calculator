import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return <button type="button" className="mdl-button mdl-js-button mdl-js-ripple-effect">{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;

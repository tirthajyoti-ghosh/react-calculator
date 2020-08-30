import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return <input type="text" className="display" value={result} />;
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;

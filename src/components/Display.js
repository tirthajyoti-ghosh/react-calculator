import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result, chain } = props;
  return (
    <div className="display">
      <div className="chain">{chain}</div>
      <div className="result">{result}</div>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
  chain: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  chain: '56 x 9',
};

export default Display;

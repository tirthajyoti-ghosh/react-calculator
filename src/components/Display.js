import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result, total, operation } = props;
  return (
    <div className="display">
      <div className="chain">
        <span>{ total }</span>&nbsp;<span>{ operation }</span>
      </div>
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
  chain: '',
};

export default Display;

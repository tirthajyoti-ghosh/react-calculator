import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result, total, operation } = props;
  return (
    <div className="display">
      <div className="chain">
        <span>{ total }</span>
        &nbsp;
        <span>{ operation }</span>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  total: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  total: '',
  operation: '',
};

export default Display;

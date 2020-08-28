import PropTypes from 'prop-types';

export const Display = (props) => {
  return <div className="display">{props.result}</div>;
};

Display.propTypes = {
  result: PropTypes.string
};

Display.defaultProps = {
  result: '0'
};

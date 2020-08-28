import PropTypes from 'prop-types';

export const Button = (props) => {
  return <button>{props.name}</button>;
};

Button.propTypes = {
  name: PropTypes.string
};

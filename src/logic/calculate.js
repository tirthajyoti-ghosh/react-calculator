import operate from './operate';

export default function calculate(total, next, operation) {
  if (total === null) {
    total = operation === '+' || operation === '-' ? '0' : '1'; // eslint-disable-line no-param-reassign
  }

  if (operation === '+/-') {
    total *= -1; // eslint-disable-line no-param-reassign
    next *= -1; // eslint-disable-line no-param-reassign

    return next;
  }

  return operate(parseFloat(total), parseFloat(next), operation);
}

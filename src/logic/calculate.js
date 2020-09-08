import operate from './operate';

export default function calculate(total, next, operation) {
  if (total === null) {
    total = operation === '+' || operation === '-' ? '0' : '1';
  }

  if (operation === '+/-') {
    total *= -1;
    next *= -1;

    return next;
  }

  return operate(parseFloat(total), parseFloat(next), operation);
}

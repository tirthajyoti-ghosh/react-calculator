import operate from './operate';

export default function calculate(total, next, operation) {

  if (operation === '+/-') {
    total *= -1;
    next *= -1;

    return next;
  }

  return operate(total, next, operation);
}

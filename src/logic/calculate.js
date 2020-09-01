import operate from './operate';

export default function calculate({ total, next, operation}, buttonName) {

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;

    return next;
  }

  return operate(total, next, buttonName);
}

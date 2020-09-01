import operate from "./operate";

export default function calculate(data={ total: '', next: '', operation: ''}, buttonName) {
  let { total, next } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;

    return next;
  }

  return operate(total, next, buttonName);
}
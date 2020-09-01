export default function calculate(data={ total: '', next: '', operation: ''}, buttonName) {
  let { total, next } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }
}
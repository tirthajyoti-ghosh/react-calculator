const Big = require('big.js');

export default function operate(numberOne, numberTwo, operation) {
  const n1 = new Big(numberOne);
  const n2 = new Big(numberTwo);

  let result;

  switch (operation) {
    case '+':
      result = n1.plus(n2);
      break;

    case '-':
      result = n1.minus(n2);
      break;

    case '×':
      result = n1.times(n2);
      break;

    case '÷':
      result = n1.div(n2);
      break;

    case '%':
      result = n1.mod(n2);
      break;

    default:
      break;
  }

  return result.toPrecision();
}

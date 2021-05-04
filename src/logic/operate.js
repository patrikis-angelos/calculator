import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  if (numberTwo === '') return numberOne;
  const x = Big(numberOne);
  const y = Big(numberTwo);
  switch (operation) {
    case '+':
      result = x.plus(y);
      break;
    case '-':
      result = x.minus(y);
      break;
    case '*':
      result = x.times(y);
      break;
    case '÷':
      result = x.div(y);
      break;
    case '%':
      result = x.div(100);
      break;
    case '+/-':
      result = x.times(-1);
      break;
    default:
      break;
  }
  return result;
};

export default operate;

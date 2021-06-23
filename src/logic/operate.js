import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  let x;
  let y;
  if (numberTwo === '') return numberOne;
  if (String(numberOne) === '0' && numberTwo === '0' && operation === '÷') return 'Undefined';
  if (String(numberOne).includes('Infinity')) {
    if (numberTwo === '0' && operation === '÷') return 'Undefined';
    return numberOne;
  }
  try {
    x = Big(numberOne);
    y = Big(numberTwo);
  } catch {
    return 'Error';
  }

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
      if (String(y) === '0') {
        if (x > 0) result = 'Infinity';
        if (x < 0) result = '-Infinity';
      } else {
        result = x.div(y);
      }
      break;
    case '%':
      result = x.div(100).times(numberTwo);
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

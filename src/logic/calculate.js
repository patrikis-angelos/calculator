import operate from './operate';

const calculate = (data, button) => {
  let { total, next, operation } = data;
  switch (button) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (operation === '=' || (total === '0' && operation === '')) {
        total = button;
        operation = '';
      } else if (operation === '') {
        if (button === '.' && total.includes('.')) {
          break;
        }
        total += button;
      } else {
        if (button === '.' && next.includes('.')) {
          break;
        }
        next += button;
      }
      break;
    case '-':
    case '+':
    case '*':
    case '÷':
      if (next !== '') {
        total = operate(total, next, operation);
        next = '';
      }
      operation = button;
      break;
    case '%':
      if (operation === '' || operation === '=') {
        total = operate(total, 1, '%');
      } else {
        next = operate(next, total, '%');
      }
      break;
    case '+/-':
      if (operation === '' || operation === '=') {
        total = operate(total, 1, '+/-');
      } else {
        next = operate(next, 1, '+/-');
      }
      break;
    case '=':
      total = operate(total, next, operation);
      next = '';
      operation = '=';
      break;
    case 'AC':
      total = '0';
      next = '';
      operation = '';
      break;
    default:
      break;
  }
  return { total, next, operation };
};

export default calculate;

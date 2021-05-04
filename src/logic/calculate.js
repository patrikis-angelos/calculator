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
      if (operation === '') {
        total += button;
      } else {
        next += button;
      }
      break;
    case '-':
    case '+':
    case '*':
    case '÷':
      if (next !== '') {
        operate()
      } else {
        operation = button
      }
      break;
    case '%':
      break;
    case '+/-':
      break;
    case '=':
      break;
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    default:
      break;
  }
  return { total, next, operation };
};

export default calculate;

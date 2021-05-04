const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    case '÷':
      result = numberOne / numberTwo;
      break;
    case '%':
      result = numberOne / 100;
      break;
    case '+/-':
      result = numberOne * -1;
      break;
  }
  return result; 
}

export default operate;
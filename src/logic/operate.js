import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numberOneLocal = numberOne && Big(numberOne);
  const numberTwoLocal = Big(numberTwo);
  let returnVal = '';

  switch (operation) {
    case '+':
      returnVal = numberOneLocal.plus(numberTwoLocal);
      break;
    case '-':
      returnVal = numberOneLocal.minus(numberTwoLocal);
      break;
    case 'X':
      returnVal = numberOneLocal.times(numberTwoLocal);
      break;
    case '÷':
      if (numberTwo === '0') { returnVal = 'Cannot divide by zero'; break; }
      returnVal = numberOneLocal.div(numberTwoLocal);
      break;
    default:
      if (numberOneLocal === null) {
        returnVal = numberTwoLocal.times(0.01);
        break;
      }
      returnVal = numberOneLocal.times(numberTwoLocal.times(0.01));
      break;
  }
  return returnVal.toString();
};

export default operate;

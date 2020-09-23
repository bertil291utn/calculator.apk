import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  const numberOneLocal = Big(numberOne);
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
      // if (numberTwoLocal === 0) { returnVal = 'No divisible para cero'; break; }
      returnVal = numberOneLocal.div(numberTwoLocal);
      break;
    default:
      returnVal = numberOneLocal.div(100);
      break;
  }
  return returnVal.toString();
};

export default operate;
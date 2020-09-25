import operate from './operate';

const isNumber = item => /[0-9]/.test(item);

let firstVarElem = false;
const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  const operators = ['+', '-', 'X', '÷', '%'];

  if (total === 'Cannot divide by zero') { total = null; firstVarElem = false; }
  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '=':
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    case '+/-':
      if (next) next = operate(next, '-1', 'X');
      if (total) total = operate(total, '-1', 'X');
      break;

    default:

      if (isNumber(buttonName)) firstVarElem = true;
      if (firstVarElem) {
        if (operators.includes(buttonName)) {
          if (buttonName === '%') {
            if (!next) next = total;
            operation = buttonName;
            total = operate(null, next, operation);
            next = null;
            operation = null;
          } else if (total && next && operation) {
            total = operate(total, next, operation);
            operation = buttonName;
            next = null;
          } else if (next && !operation) {
            total = next;
            operation = buttonName;
            next = null;
          } else operation = buttonName;
        } else if (!next && !operation && total) {
          next = buttonName;
          total = null;
        } else if (next) {
          if (buttonName !== '.' || (buttonName === '.' && next.indexOf(buttonName) < 0)) {
            next = next.concat(buttonName);
          }
        } else {
          next = buttonName;
        }
        break;
      }
  }

  return { total, next, operation };
};

export default calculate;

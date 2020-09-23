import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  const operators = ['+', '-', 'X', '÷', '%'];
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
      if (next) next = operate(next, '-1', 'x');
      if (total) total = operate(total, '-1', 'x');

      break;
    default:
      if (operators.includes(buttonName)) {
        if (total && next && operation) {
          total = operate(total, next, operation);
          operation = buttonName;
          next = null;
        } else if (next && !operation) {
          total = next;
          operation = buttonName;
          next = null;
        } else operation = buttonName;
      } else if (next) {
        if (buttonName !== '.' || (buttonName === '.' && next.indexOf(buttonName) < 0)) {
          next = next.concat(buttonName);
        }
      } else {
        next = buttonName;
      }
      break;
  }

  return { total, next, operation };
};

export default calculate;

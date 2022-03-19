interface ICalcInputs {
  operand: string;
  operator: string;
  prevOperator: string;
  total: number;
}

export default function getCalcResult(
  obj: ICalcInputs,
  operand: string | number
): ICalcInputs {
  const tempObj = { ...obj };
  const nowOperator = Number(tempObj.operator);
  const prevOperator = Number(tempObj.prevOperator);

  const fullCondition = tempObj.operator !== '' && tempObj.prevOperator !== '';

  const initOp = (operand: string) => {
    const emptyCondition = tempObj.prevOperator === '' && tempObj.total === 0;
    emptyCondition &&
      ((tempObj.prevOperator = tempObj.operator),
      (tempObj.operator = ''),
      (tempObj.operand = operand));
    tempObj.operator === '' &&
      tempObj.prevOperator !== '' &&
      (tempObj.operand = operand);
  };

  const plus = () => {
    fullCondition &&
      ((tempObj.total = prevOperator + nowOperator),
      (tempObj.operator = ''),
      (tempObj.prevOperator = String(tempObj.total)),
      (tempObj.operand = ''));
  };

  const minus = () => {
    fullCondition &&
      ((tempObj.total = prevOperator - nowOperator),
      (tempObj.operator = ''),
      (tempObj.prevOperator = String(tempObj.total)),
      (tempObj.operand = ''));
  };

  const multiple = () => {
    fullCondition &&
      ((tempObj.total = prevOperator * nowOperator),
      (tempObj.operator = ''),
      (tempObj.prevOperator = String(tempObj.total)),
      (tempObj.operand = ''));
  };

  const divine = () => {
    fullCondition &&
      ((tempObj.total = prevOperator / nowOperator),
      (tempObj.operator = ''),
      (tempObj.prevOperator = String(tempObj.total)),
      (tempObj.operand = ''));
  };

  const restCalc = () => {
    fullCondition &&
      ((tempObj.total = prevOperator % nowOperator),
      (tempObj.operator = ''),
      (tempObj.prevOperator = String(tempObj.total)),
      (tempObj.operand = ''));
  };

  switch (operand) {
    case '+':
      initOp(operand);
      plus();
      break;
    case '-':
      initOp(operand);
      minus();
      break;
    case '*':
      initOp(operand);
      multiple();
      break;
    case '÷':
      initOp(operand);
      divine();
      break;
    case '%':
      initOp(operand);
      restCalc();
      break;
    case 'pow':
      tempObj.total !== 0 && tempObj.operator === ''
        ? (tempObj.total **= 2)
        : (tempObj.total = nowOperator ** 2);

      tempObj.operator = '';
      tempObj.prevOperator = String(tempObj.total);
      break;
    case 'sqrt':
      tempObj.total !== 0 && tempObj.operator === ''
        ? (tempObj.total = Math.sqrt(tempObj.total))
        : (tempObj.total = Math.sqrt(nowOperator));

      tempObj.operator = '';
      tempObj.prevOperator = String(tempObj.total);
      break;
    case '1/X':
      tempObj.total !== 0 && tempObj.operator === ''
        ? (tempObj.total = 1 / tempObj.total)
        : (tempObj.total = 1 / nowOperator);

      tempObj.operator = '';
      tempObj.prevOperator = String(tempObj.total);
      break;
    case '+/-':
      tempObj.total !== 0 && tempObj.operator === ''
        ? (tempObj.total *= -1)
        : (tempObj.total = nowOperator * -1);

      tempObj.operator = '';
      tempObj.prevOperator = String(tempObj.total);
      break;
    case '.':
      !tempObj.operator.includes('.') && (tempObj.operator += operand);
      break;
    case '=':
      switch (tempObj.operand) {
        case '+':
          plus();
          break;
        case '-':
          minus();
          break;
        case '*':
          multiple();
          break;
        case '÷':
          divine();
          break;
        case '%':
          restCalc();
          break;
        default:
      }
      break;
    case 'C':
      tempObj.operator = '';
      tempObj.prevOperator = '';
      tempObj.total = 0;
      break;
    case 'CE':
      tempObj.operator = '';
      break;
    case 'X':
      tempObj.operator = tempObj.operator.slice(0, -1);
      break;
    default:
      tempObj.total === nowOperator && (tempObj.operator = '');
      tempObj.operator += operand;
  }
  return tempObj;
}

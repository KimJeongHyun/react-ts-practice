import { useEffect, useState } from 'react';
import getCalcResult from '../../../utils/getCalcResult';

export default function useSetCalcInput() {
  const [calcInputs, setCalcInputs] = useState({
    operand: '',
    operator: '',
    prevOperator: '',
    total: 0,
  });

  const checkTypes = (item: string | number): void => {
    setCalcInputs(current => {
      const prevObj = { ...current };
      const newObj = getCalcResult(prevObj, item);

      return newObj;
    });
  };

  useEffect(() => {
    console.log(calcInputs);
  }, [calcInputs]);

  return { calcInputs, checkTypes };
}

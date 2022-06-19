import React from 'react';
import styled from 'styled-components';

import { BiEraser } from 'react-icons/bi';

import { GRID_DATAS } from './GRID_DATAS';

import useSetCalcInput from './hook/useSetCalcInput';

export default function Calculator() {
  const { calcInputs, checkTypes } = useSetCalcInput();

  return (
    <CalculatorWrapper>
      <ResultBox>
        {calcInputs.operator !== '' ? calcInputs.operator : calcInputs.total}
      </ResultBox>
      <NumberGrid>
        {GRID_DATAS.map(item => {
          return (
            <EachGridItem key={item} onClick={() => checkTypes(item)}>
              {item === 'X' ? <BiEraser /> : item}
            </EachGridItem>
          );
        })}
      </NumberGrid>
    </CalculatorWrapper>
  );
}

const CalculatorWrapper = styled.section`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ResultBox = styled.div`
  flex-basis: 10%;
  background-color: #fff;
  border: 1px solid black;
`;

const NumberGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 25%));
  grid-template-rows: repeat(auto-fill, minmax(16.67%, 16.67%));
  background-color: #eee;
`;

const EachGridItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bbb;
  &:hover {
    background-color: #aaa;
  }
`;

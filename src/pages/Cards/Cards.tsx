import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import { PageFrame } from '../../components/PageFrame/PageFrame';

interface ICard {
  data: [
    {
      id: number;
      title: string;
      comments: string;
    }
  ];
}

export default function Cards() {
  const [cardData, setCardData] = useState<ICard>();

  useEffect(() => {
    fetch('/CardData.json')
      .then(res => res.json())
      .then(res => setCardData(res));
  }, []);

  return (
    <PageFrame>
      <GridContainer>
        {cardData?.data.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </GridContainer>
    </PageFrame>
  );
}

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(135px, 30%));
  column-gap: 5%;
  grid-template-rows: repeat(auto-fill, minmax(135px, 30%));
  row-gap: 5%;
  align-items: center;
`;

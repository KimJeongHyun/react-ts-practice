import React from 'react';
import styled from 'styled-components';
import useInputComment from '../hook/useInputComment';

interface ICardData {
  id: number;
  title: string;
  comments: string;
}

export default function Card({ data }: { data: ICardData }) {
  const {
    cardComments,
    newInput,
    handleComments,
    handleInput,
    keyboardEnterInput,
  } = useInputComment(data.comments);

  return (
    <CardWrapper>
      <CardTitle>{data.title}</CardTitle>
      <CardBody>
        {cardComments.map(item => (
          <Comment key={item}>{item}</Comment>
        ))}
      </CardBody>
      <CommentBox>
        <CardCommentInput
          onChange={handleInput}
          onKeyDown={keyboardEnterInput}
          value={newInput}
          placeholder="작성할 댓글을 입력하세요."
        />
        <CommentRegBtn onClick={handleComments}>등록</CommentRegBtn>
      </CommentBox>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.cardBackColor};
`;

const CardTitle = styled.div`
  text-align: center;
  border-bottom: 2px solid #ddd;
  padding: ${props => props.theme.cardPadding};
`;

const CardBody = styled.div`
  flex-basis: 70%;
  height: 70%;
  border-bottom: 2px solid #ddd;
  padding: ${props => props.theme.cardPadding};
  overflow: auto;
`;

const CommentBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
`;

const CardCommentInput = styled.input`
  width: 90%;
  height: 100%;
  padding-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.cardBackColor};
`;

const CommentRegBtn = styled.button`
  height: 100%;
  flex: 1;
  color: ${props => props.theme.textColor};
`;

const Comment = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

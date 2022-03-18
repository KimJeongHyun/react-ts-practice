import React, { useState } from 'react';

export default function useInputComment(comments: string) {
  const [newInput, setNewInput] = useState('');
  const [cardComments, setCardComments] = useState([comments]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewInput(value);
  };

  const handleComments = () => {
    setCardComments(current => {
      const newArray = [...current];
      newArray.push(newInput);
      return newArray;
    });
    setNewInput('');
  };

  const keyboardEnterInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && handleComments();
  };

  return {
    cardComments,
    newInput,
    handleComments,
    handleInput,
    keyboardEnterInput,
  };
}

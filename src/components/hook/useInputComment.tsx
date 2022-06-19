import React, { useState, useCallback } from 'react';

export default function useInputComment(comments: string) {
  const [newInput, setNewInput] = useState('');
  const [cardComments, setCardComments] = useState([comments]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewInput(value);
  };

  const handleComments = useCallback(() => {
    setCardComments(current => {
      const newArray = [...current];
      newArray.push(newInput);
      return newArray;
    });
    setNewInput('');
  }, [newInput]);

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

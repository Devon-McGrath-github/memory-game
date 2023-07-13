import React, { useState } from 'react';

const gameActions = () => {
  function handleCardSelection(card) {
    console.log(card);
  }

  return {
    handleCardSelection,
  };
};

export default gameActions;

import { useState } from 'react';

const useActions = () => {
  const [selectedCards, setSelectCards] = useState([]);

  function handleCardSelection(card) {
    if (selectedCards.includes(card)) {
      console.log('you lost');
    } else {
      setSelectCards(card);
    }
  }

  return {
    handleCardSelection,
  };
};

export { useActions };

import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [cards, setCards] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((cards) => setCards(cards));
  }, []);

  function onClickFavorite(event) {
    (isFavorite.includes(event.target.id)) ? setIsFavorite(isFavorite.filter(favorite => favorite !== event.target.id)) : setIsFavorite([...isFavorite, event.target.id]);
  }

  function handleDeleteCard(deletedCard) {
    const updatedCards = cards.filter((card) => card.id !== deletedCard.id);
    setCards(updatedCards);
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer cards={cards} isFavorite={isFavorite} onClickFavorite={onClickFavorite} onDeleteCard={handleDeleteCard} />
    </div>
  );
}

export default App;

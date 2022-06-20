import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [cards, setCards] = useState([]);
  const [fullCards, setFullCards] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((cards) => {
        setCards(cards);
        setFullCards(cards);
      })
  }, []);

  function onClickFavorite(event) {
    (isFavorite.includes(event.target.id)) ? setIsFavorite(isFavorite.filter(favorite => favorite !== event.target.id)) : setIsFavorite([...isFavorite, event.target.id]);
  }

  function handleDeleteCard(deletedCard) {
    const updatedCards = cards.filter((card) => card.id !== deletedCard.id);
    setCards(updatedCards);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCards(fullCards.filter(card => card.description.includes(search)));
  }

  return (
    <div className="app">
      <Header search={search} handleSearchChange={handleSearchChange} handleSubmit={handleSubmit} />
      <ListingsContainer cards={cards} isFavorite={isFavorite} onClickFavorite={onClickFavorite} onDeleteCard={handleDeleteCard} search={search} />
    </div>
  );
}

export default App;

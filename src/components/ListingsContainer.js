import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ cards, isFavorite, onClickFavorite, onDeleteCard, search }) {
  
  const cardsToDisplay = cards
  // .filter(card => card.description.includes(search));

  // const cardsToDisplay = cards.map((card) => <ListingCard key={card.id} card={card} isFavorite={isFavorite} onClickFavorite={onClickFavorite} onDeleteCard={onDeleteCard} />)

  return (
    <main>
      <ul className="cards">
        {cardsToDisplay.map((card) => <ListingCard key={card.id} card={card} isFavorite={isFavorite} onClickFavorite={onClickFavorite} onDeleteCard={onDeleteCard} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

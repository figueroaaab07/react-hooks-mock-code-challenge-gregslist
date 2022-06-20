import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ cards, isFavorite, onClickFavorite, onDeleteCard }) {
  const cardsToDisplay = cards.map((card) => <ListingCard key={card.id} card={card} isFavorite={isFavorite} onClickFavorite={onClickFavorite} onDeleteCard={onDeleteCard} />)

  return (
    <main>
      <ul className="cards">
        {cardsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;

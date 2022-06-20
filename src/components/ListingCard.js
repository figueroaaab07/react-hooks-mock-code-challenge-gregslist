import React from "react";

function ListingCard({ card, isFavorite, onClickFavorite, onDeleteCard }) {
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${card.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteCard(card));
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        {(isFavorite.includes(card.id.toString())) ? (
          <button id={card.id} className="emoji-button favorite active" onClick={onClickFavorite}>★</button>
        ) : (
          <button id={card.id} className="emoji-button favorite" onClick={onClickFavorite}>☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

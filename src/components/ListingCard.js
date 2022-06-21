import React from "react";

function ListingCard({ card, isFavorite, onClickFavorite, onDeleteCard }) {
  const {id, description, image, location} = card;

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteCard(card));
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {(isFavorite.includes(id.toString())) ? (
          <button id={id} className="emoji-button favorite active" onClick={onClickFavorite}>★</button>
        ) : (
          <button id={id} className="emoji-button favorite" onClick={onClickFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

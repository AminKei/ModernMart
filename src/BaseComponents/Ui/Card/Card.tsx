import React from "react";
import "./Card.css";

interface CardProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  options?: string[];
  price?: number;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  description,
  imageUrl,
  title,
  options,
  price,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      {/* <p className="gold-star">&#9733;</p> */}
      <img
        src={imageUrl}
        alt={title}
        className="card-image"
        onError={(e) => {
          e.currentTarget.src =
            "https://cdn.dribbble.com/users/1091213/screenshots/4203966/800_600.gif";
        }}
      />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="div-button-price">
        <p className="card-price">${price}</p>
        <button className="card-button">Make an order</button>
      </div>
    </div>
  );
};

export default Card;

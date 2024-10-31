import React from "react";
import "./Card.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  options: string[];
  price: number;
}

const Card: React.FC<CardProps> = ({
  description,
  imageUrl,
  title,
  options,
  price,
}) => {
  return (
    <div className="card">
        {/* <p className="gold-star">&#9733;</p> */}
      <img src={imageUrl} alt={title} className="card-image" />
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

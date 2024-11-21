import React from "react";
import "./ItemComments.css";

interface FlavorCardProps {
  name: string;
  rating: number;
  text: string;
}

const ItemComments: React.FC<FlavorCardProps> = ({ name, rating, text }) => {
  return (
    <div className="flavor-card">
      <div className="flavor-card-header">
        <h4>{name}:</h4>
        <span className="rating">{rating} ⭐</span>
      </div>
      <p className="flavor-description">{text}</p>
    </div>
  );
};

export default ItemComments;

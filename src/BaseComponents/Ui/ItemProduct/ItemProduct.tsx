import React from "react";
import "./ItemProduct.css";

interface ProductCardProps {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  quantity?: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDelete?: () => void;
}

const ItemProduct: React.FC<ProductCardProps> = ({
  description,
  image,
  onDecrease,
  onDelete,
  onIncrease,
  price,
  quantity,
  title,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
      </div>
      <div
        style={{
          display: "grid",
          justifyContent: "end",
          width: "30%",
          height: "100%",
          float: "right",
        }}
      >
        <div className="product-price"> Price: ${price}</div>
        <div className="quantity-controls">
          <button onClick={onDecrease}>-</button>
          <span> {quantity}</span>
          <button onClick={onIncrease}>+</button>
          <button className="delete-button" onClick={onDelete}>
            &#10006;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;

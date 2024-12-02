import React from "react";
import "./ItemProduct.css";
import Button from "../Button/Button";
import { useAppNavigate } from "../../../Hooks/Navigation/useAppNavigate";

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
          <Button
            bgColor="#000"
            color="white"
            border="solid 1px white"
            width={50}
            onClick={onDecrease}
          >
            -
          </Button>
          <span> {quantity}</span>
          <Button
            width={50}
            onClick={onIncrease}
            bgColor="#000"
            color="white"
            border="solid 1px white"
          >
            +
          </Button>
          <Button className="delete-button" width={50} onClick={onDelete} >
            <svg
              width="23"
              height="23"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;

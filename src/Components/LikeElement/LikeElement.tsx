import React from "react";
import "./LikeElement.css";

interface WishlistButtonProps {
  onClick?: () => void;
}

const LikeElement: React.FC<WishlistButtonProps> = ({ onClick }) => {
  return (
    <button className="wishlist-button" onClick={onClick}>
      <span className="heart-icon">❤️</span>
      <span className="button-text">Add to Wishlist</span>
    </button>
  );
};

export default LikeElement;

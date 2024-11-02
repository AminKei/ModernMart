import React, { useState } from "react";
import "./SizeElement.css";

interface SizeSelectorProps {
  sizes: string[];
  label: string;
}

const SizeElement: React.FC<SizeSelectorProps> = ({ label, sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="size-selector">
      <label className="size-label">{label}</label>
      <div className="size-buttons">
        {sizes.map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? "active" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeElement;

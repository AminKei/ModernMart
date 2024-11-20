import React from "react";
import "./SortModal.css";

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSortSelect: (sortOption: string) => void;
}

const SortModal: React.FC<SortModalProps> = ({
  isOpen,
  onClose,
  onSortSelect,
}) => {
  const sortOptions = [
    "the cheapest",
    "the most expensive",
    "best sellers",
    "Most visited",
  ];

  const handleOptionClick = (option: string) => {
    onSortSelect(option);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sort" onClick={(e) => e.stopPropagation()}>
        <ul>
          <h3>Property Sort</h3>
          {sortOptions.map((option) => (
            <p key={option} onClick={() => handleOptionClick(option)} style={{display:'flex', justifyContent:'space-between', width:"100%"}}>
              {option} <span className="arrow">→</span>
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortModal;

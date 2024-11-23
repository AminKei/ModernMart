import React, { useState } from "react";
import './Dropdown.css';
interface DropdownProps {
  options?: any[];
  label?: string;
  Childreen?: React.ReactNode;
  onSelect?:(e: React.ChangeEvent<HTMLInputElement>) => void
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, Childreen, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-display" onClick={toggleDropdown}>
        {selectedOption || label}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options?.map((option) => (
            <div
              key={option}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
              onChange={onSelect}
            >
              
              {option}
            </div>
          ))}
          {Childreen}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React, { useState } from "react";
import "./ToggleSwitch.css";

interface ToggleSwitchProps {
  initialValue?: boolean;
  onToggle: (value: boolean) => void;
  option?: any;
  Option1: string;
  Option2: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  onToggle,
  initialValue,
  option,
  Option1,
  Option2,
}) => {
  const [isMonthly, setIsMonthly] = useState(initialValue);

  const handleToggle = () => {
    setIsMonthly((prev) => !prev);
    onToggle(!isMonthly);
  };

  return (
    <div>
      <label htmlFor="filter" className="switch" aria-label="Toggle Filter">
        <input type="checkbox" id="filter" />
        <span /* onClick={() => setSortMode(1)} */>{Option1}</span>
        <span /* onClick={() => setSortMode(2)} */>{Option2}</span>
      </label>
    </div>
  );
};

export default ToggleSwitch;

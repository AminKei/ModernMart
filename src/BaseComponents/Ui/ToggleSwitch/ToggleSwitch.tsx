import React, { useState } from "react";
import "./ToggleSwitch.css";

interface ToggleSwitchProps {
  initialValue?: boolean;
  onToggle: (value: boolean) => void;
  option?: any;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  onToggle,
  initialValue,
  option,
}) => {
  const [isMonthly, setIsMonthly] = useState(initialValue);

  const handleToggle = () => {
    setIsMonthly((prev) => !prev);
    onToggle(!isMonthly);
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div
        className={`toggle-switch-indicator ${
          isMonthly ? "monthly" : "yearly"
        }`}
      />
      <span className={`toggle-label ${isMonthly ? { option } : { option }}`}>
        {option}
      </span>
    </div>
  );
};

export default ToggleSwitch;

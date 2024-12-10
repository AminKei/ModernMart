import React from "react";
import "./Range.css";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange?:   React.ChangeEvent<HTMLInputElement>;
}

const Range: React.FC<SliderProps> = ({ max, min, value, onChange }) => {
  const percent = ((value - min) / (max - min)) * 100;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(max, Math.max(min, Number(event.target.value)));
    // onChange(newValue);
  };

  return (
    <div className="slider-container">
      <span>${min}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <span>${max}</span>
      <div className="thumb" style={{ left: `${percent}%` }} />
    </div>
  );
};

export default Range;

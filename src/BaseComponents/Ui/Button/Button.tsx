import React, { ReactNode } from "react";

type Position = "absolute" | "relative";
type BgColor = "#000" | "#FFFFFF" | "transparent";

interface ButtonProps {
  bgColor?: BgColor;
  color?: string;
  radius?: string;
  padding?: string;
  margin?: string;
  onClick?: () => void;
  fontSize?: number;
  border?: string;
  width?: number;
  height?: number;
  className?: string;
  bottom?: number;
  position?: Position;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    bgColor,
    border,
    bottom,
    className,
    color,
    fontSize,
    height,
    margin,
    onClick,
    padding,
    position,
    radius,
    width,
  } = props;
  return (
    <button
      style={{
        backgroundColor: bgColor || "#ffffff",
        border: border || "none",
        color: color || "#000000",
        width: width || "100%",
        height: height,
        borderRadius: radius || "5px",
        padding: padding || "10px 12px",
        fontSize: fontSize,
        cursor: "pointer",
        margin: margin,
        bottom: bottom,
        position: position,
        fontWeight:"bold"
      }}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;

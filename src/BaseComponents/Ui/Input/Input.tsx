import React from "react";


type InputType = "text" | "password" | "email" | "number" | "file";

interface PropsInput {
  width?: number;
  heigth?: number;
  children?: React.ReactNode;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  ref?: string;
  autoFocus?: boolean;
  color?: string;
  type?:InputType;
}

const Input: React.FC<PropsInput> = (props) => {
  const {
    heigth,
    width,
    onChange,
    value,
    ref,
    autoFocus,
    placeholder,
    className,
    color,
    type
  } = props;

  return (
    <input
      style={{
        border: "solid 1px white",
        background: "transparent",
        padding: "10px 0px 10px 10px",
        borderRadius: "5px",
        height: heigth || "25px",
        color: color || "white",
        fontWeight: "bold",
        outline: "none",
      }}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      ref={ref}
      autoFocus={autoFocus}
      type={type}
    />
  );
};

export default Input;

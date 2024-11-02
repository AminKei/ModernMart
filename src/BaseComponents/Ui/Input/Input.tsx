import React from "react";

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
}

const Input: React.FC<PropsInput> = (props) => {
  const {
    children,
    heigth,
    width,
    onChange,
    value,
    ref,
    autoFocus,
    placeholder,
    className,
  } = props;

  return (
    <input
      style={{
        border: "solid 1px white",
        background: "transparent",
        padding: "10px 0px",
        width: width || "100%",
        borderRadius: "5px",
        height: heigth || "25px",
        color: "white",
        fontWeight: "bold",
      }}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      ref={ref}
      autoFocus={autoFocus}
    />
  );
};

export default Input;

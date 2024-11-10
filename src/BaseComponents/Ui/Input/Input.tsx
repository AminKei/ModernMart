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
  color?:string
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
    color
  } = props;

  return (
    <input
      style={{
        border: "solid 1px white",
        background: "transparent",
        padding: "10px 0px 10px 10px",
        // width: width || "100%",
        borderRadius: "5px",
        height: heigth || "25px",
        color:  color || "white",
        fontWeight: "bold",
        outline:"none"
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

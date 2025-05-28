import React from "react";
import "./style.css";

export const CustomerButton = ({
  className = "",
  onClick,
  disabled = false,
}) => {
  return (
    <div
      className={`customer-button ${className} ${disabled ? "disabled" : ""}`}
      onClick={disabled ? undefined : onClick}
    />
  );
};

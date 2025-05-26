import React from "react";
import "./style.css";

export const CustomerButton = ({ className = "", onClick }) => {
  return <div className={`customer-button ${className}`} onClick={onClick} />;
};

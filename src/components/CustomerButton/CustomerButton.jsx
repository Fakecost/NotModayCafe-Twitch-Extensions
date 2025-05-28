import React from "react";
import "./style.css";

export const CustomerButton = ({ className = "", onClick, inCafe = false }) => {
  return (
    <div
      className={`customer-button ${inCafe ? "disabled" : ""} ${className}`}
      onClick={inCafe ? undefined : onClick} // ❗ ป้องกันคลิก
    />
  );
};

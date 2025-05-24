import React from "react";
import "./style.css";

export const StarFrame = ({ className = "", onClick, isActive }) => {
  return (
    <div
      className={`star-frame ${isActive ? "active" : ""} ${className}`.trim()}
      onClick={onClick}
    >
      <div className="star-inner" />
    </div>
  );
};

import React from "react";
import "./style.css";

export const FoodButton = ({ className, name, image, onClick, isSelected }) => {
  const classes = `food-button ${className || ""} ${
    isSelected ? "selected" : ""
  }`.trim();

  return (
    <div className={classes} onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="food-icon-group">
        <div className="food-icon" style={image} />
      </div>
      <div className="food-name-wrapper">
        <p className="food-name">{name}</p>
      </div>
    </div>
  );
};

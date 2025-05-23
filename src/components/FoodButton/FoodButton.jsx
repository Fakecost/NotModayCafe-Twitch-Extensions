import React from "react";
import "./style.css";

export const FoodButton = ({ className, name, image, onClick, isSelected }) => {
  const classes = `food-button ${className || ""} ${
    isSelected ? "selected" : ""
  }`.trim();
  return (
    <div className={classes} onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="food-icon-group">
        <img className="food-icon" src={image} alt={`Food: ${name}`} />
      </div>
      <div className="food-name-wrapper">
        <p className="food-name">{name}</p>
      </div>
    </div>
  );
};

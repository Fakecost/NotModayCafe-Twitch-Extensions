/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const FoodButton = ({ className }) => {
  return (
    <div className={`food-button ${className}`}>
      <div className="food-icon-group">
        <img className="food-icon" alt="Food icon" src="/img/foodicon-3.png" />
      </div>

      <div className="food-name-wrapper">
        <p className="food-name">Strawberry And Chocolate Soft serve</p>
      </div>
    </div>
  );
};

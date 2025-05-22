import React from "react";
import { FoodButton } from "../../components/FoodButton";
import "./style.css";

export const OrderFrame = ({ onClose, onBack, onNext }) => {
  return (
    <div className="order-frame">
      <div className="div-3">
        <div className="food-grid">
          <div className="container">
            {[...Array(14)].map((_, i) => (
              <FoodButton key={i} className={`food-button-${i + 1}`} />
            ))}
          </div>
        </div>

        <button className="back-button-wrapper" onClick={onBack}>
          <div className="button">
            <div className="overlap-group-3">
              <div className="text-wrapper-3">Back</div>
            </div>
          </div>
        </button>

        <button className="next-button" onClick={onNext}>
          <div className="button">
            <div className="overlap-group-4">
              <div className="text-wrapper-3">Next</div>
            </div>
          </div>
        </button>

        <div className="overlap-2">
          <div className="order-title">Order your Dish</div>

          <div className="status-UI-2">
            <div className="main-button-3">
              <img
                className="UI-customer-icon"
                alt="Ui customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon1-1.png"
              />
              <img
                className="UI-customer-icon"
                alt="Ui customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon3-1-1.png"
              />
              <img
                className="UI-customer-icon"
                alt="Ui customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon5-1-1.png"
              />
            </div>
          </div>
        </div>

        <div className="customer-display-2">
          <div className="queue-name-2">Realcost_MorronError</div>
          <img
            className="customer-image-2"
            alt="Customer image"
            src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682dd5f99fc6c14743fad6a5/img/customerimage@2x.png"
          />
        </div>

        <div className="food-icon-group-3">
          <img
            className="food-icon-2"
            alt="Food icon"
            src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682dd5f99fc6c14743fad6a5/img/foodicon.png"
          />
          <p className="food-name-2">Strawberry And Chocolate Soft serve</p>
          <div className="order-header-2">Order</div>
        </div>

        <div
          className="close-button-2"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

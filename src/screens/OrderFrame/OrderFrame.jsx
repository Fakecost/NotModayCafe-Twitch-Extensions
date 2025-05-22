import React from "react";
import { FoodButton } from "../../components/FoodButton";
import "./style.css";

export const OrderFrame = ({ onClose, onNext, onBack }) => {
  return (
    <div className="order-frame">
      <div className="div-3">
        <div
          className="close-button-3"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />

        <div className="food-grid">
          <div className="container-2">
            {Array.from({ length: 14 }).map((_, index) => (
              <FoodButton key={index} className={`food-button-${index + 1}`} />
            ))}
          </div>
        </div>

        <button
          className="back-button-wrapper"
          onClick={onBack}
          style={{ cursor: "pointer" }}
        >
          <div className="overlap-group-wrapper-2">
            <div className="overlap-group-5">
              <div className="text-wrapper-4">Back</div>
            </div>
          </div>
        </button>

        <button
          className="next-button"
          onClick={onNext}
          style={{ cursor: "pointer" }}
        >
          <div className="overlap-group-wrapper-2">
            <div className="overlap-group-6">
              <div className="text-wrapper-4">Next</div>
            </div>
          </div>
        </button>

        <div className="overlap-3">
          <div className="order-title">Order your Dish</div>

          <div className="status-UI-2">
            <div className="main-button-3">
              <img
                className="UI-customer-icon"
                alt="UI customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon1-1.png"
              />
              <img
                className="UI-customer-icon"
                alt="UI customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon3-1-1.png"
              />
              <img
                className="UI-customer-icon"
                alt="UI customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon5-1-1.png"
              />
            </div>
          </div>
        </div>

        <div className="customer-display-2">
          <div className="queue-name-2">Realcost_MorronError</div>
          <img
            className="customer-image-2"
            alt="Customer"
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
      </div>
    </div>
  );
};

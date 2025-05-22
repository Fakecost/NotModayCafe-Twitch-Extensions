import React from "react";
import { FoodButton } from "../../components/FoodButton";
import { availableSkins } from "../../Data";
import { availableFoods } from "../../Data.generated";
import "./style.css";

const CDN = "https://sunny.bixmy.party/cdn/images/Customer/";

export const OrderFrame = ({ onClose, onNext, onBack, selectedSkin }) => {
  const skin =
    selectedSkin && selectedSkin.file
      ? selectedSkin
      : availableSkins[Math.floor(Math.random() * availableSkins.length)];

  const customerImage = `${CDN}${skin.file}`;

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
                src="https://sunny.bixmy.party/cdn/images/sprite-extension/UI-Customer-Icon2.png"
              />
              <img
                className="UI-customer-icon"
                alt="UI customer"
                src="https://sunny.bixmy.party/cdn/images/sprite-extension/UI-Customer-Icon3.png"
              />
              <img
                className="UI-customer-icon"
                alt="UI customer"
                src="https://sunny.bixmy.party/cdn/images/sprite-extension/UI-Customer-Icon5.png"
              />
            </div>
          </div>
        </div>

        <div className="customer-display-2">
          <div className="queue-name-2">Realcost_MorronError</div>
          <img
            className="customer-image-2"
            alt="Customer"
            src={customerImage}
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

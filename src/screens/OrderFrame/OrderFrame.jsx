import React from "react";
import { Link } from "react-router-dom";
import { FoodButton } from "../../components/FoodButton";
import "./style.css";

export const OrderFrame = () => {
  return (
    <div className="order-frame">
      <div className="div-3">
        <div className="food-grid">
          <div className="container-2">
            <FoodButton className="food-button-instance" />
            <FoodButton className="food-button-2" />
            <FoodButton className="food-button-3" />
            <FoodButton className="food-button-4" />
            <FoodButton className="food-button-5" />
            <FoodButton className="food-button-6" />
            <FoodButton className="food-button-7" />
            <FoodButton className="food-button-8" />
            <FoodButton className="food-button-9" />
            <FoodButton className="food-button-10" />
            <FoodButton className="food-button-11" />
            <FoodButton className="food-button-12" />
            <FoodButton className="food-button-13" />
            <FoodButton className="food-button-14" />
          </div>
        </div>

        <Link to="/join-frame">
          <button className="back-button-wrapper">
            <button className="overlap-group-wrapper-2">
              <div className="overlap-group-5">
                <div className="text-wrapper-4">Back</div>
              </div>
            </button>
          </button>
        </Link>

        <Link to="/review-frame">
          <button className="next-button">
            <button className="overlap-group-wrapper-2">
              <div className="overlap-group-6">
                <div className="text-wrapper-4">Next</div>
              </div>
            </button>
          </button>
        </Link>

        <div className="overlap-3">
          <div className="order-title">Order your Dish</div>

          <div className="status-UI-2">
            <div className="main-button-3">
              <img
                className="UI-customer-icon"
                alt="Ui customer"
                src="/img/ui-customer-icon1-1-6.png"
              />

              <img
                className="UI-customer-icon"
                alt="Ui customer"
                src="/img/ui-customer-icon3-1-7.png"
              />

              <img
                className="UI-customer-icon"
                alt="Ui customer"
                src="/img/ui-customer-icon5-1-7.png"
              />
            </div>
          </div>
        </div>

        <div className="customer-display-2">
          <div className="queue-name-2">Realcost_MorronError</div>

          <img
            className="customer-image-2"
            alt="Customer image"
            src="/img/customerimage-3.png"
          />
        </div>

        <div className="food-icon-group-3">
          <img
            className="food-icon-2"
            alt="Food icon"
            src="/img/foodicon-3.png"
          />

          <p className="food-name-2">Strawberry And Chocolate Soft serve</p>

          <div className="order-header-2">Order</div>
        </div>

        <div className="close-button-3" />
      </div>
    </div>
  );
};

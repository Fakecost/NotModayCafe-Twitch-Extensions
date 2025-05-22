import React from "react";
import { Link } from "react-router-dom";
import { StarFrame } from "../../components/StarFrame";
import "./style.css";

export const ReviewFrame = () => {
  return (
    <div className="review-frame">
      <div className="div">
        <div className="review-display">
          <div className="food-big-display">
            <div className="overlap-group">
              <img
                className="food-background"
                alt="Food background"
                src="/img/foodbackground-3.png"
              />

              <img
                className="food-front"
                alt="Food front"
                src="/img/foodfront-3.png"
              />
            </div>
          </div>

          <div className="review-star-grid">
            <StarFrame className="star-frame-instance" />
            <StarFrame className="star-frame-instance" />
            <StarFrame className="star-frame-instance" />
            <StarFrame className="star-frame-instance" />
            <StarFrame className="star-frame-instance" />
          </div>

          <div className="review-text" />
        </div>

        <div className="overlap">
          <div className="review-title">Review</div>

          <div className="status-UI">
            <div className="main-button">
              <img
                className="UI-customer"
                alt="Ui customer"
                src="/img/ui-customer-icon1-1-6.png"
              />

              <img
                className="UI-customer"
                alt="Ui customer"
                src="/img/ui-customer-icon3-1-6.png"
              />

              <img
                className="UI-customer"
                alt="Ui customer"
                src="/img/ui-customer-icon5-1-6.png"
              />
            </div>
          </div>
        </div>

        <div className="customer-display">
          <div className="text-wrapper">Realcost_MorronError</div>

          <img
            className="customer-image"
            alt="Customer image"
            src="/img/customerimage-3.png"
          />
        </div>

        <div className="food-icon-group-2">
          <img className="img" alt="Food icon" src="/img/foodicon-3.png" />

          <p className="p">Strawberry And Chocolate Soft serve</p>

          <div className="order-header">Order</div>
        </div>

        <Link to="/order-frame">
          <button className="back-button">
            <button className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Back</div>
              </div>
            </button>
          </button>
        </Link>

        <Link to="/queue-frame">
          <button className="confirm-button">
            <Link to="/queue-frame">
              <button className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-2">Next</div>
                </div>
              </button>
            </Link>
          </button>
        </Link>

        <div className="close-button" />
      </div>
    </div>
  );
};

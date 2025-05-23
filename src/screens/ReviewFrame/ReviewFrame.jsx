import React, { useState } from "react";
import { StarFrame } from "../../components/StarFrame";
import { availableFoods } from "../../Data.generated";
import "./style.css";

const CDN = "https://sunny.bixmy.party/cdn/images/";
const CUSTOMER_CDN = `${CDN}Customer/`;

export const ReviewFrame = ({
  onBack,
  onNext,
  onClose,
  selectedSkin,
  selectedFood,
}) => {
  const [rating, setRating] = useState(1); // ⭐ เริ่มต้นที่ 1 เสมอ

  const customerImage = selectedSkin
    ? `${CUSTOMER_CDN}${selectedSkin.file}`
    : "";

  const fallbackImage =
    "https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682e09d5a1b6dd9b033310b7/img/foodfront.png";

  const bigImage = selectedFood?.bigFile
    ? `${CDN}${selectedFood.bigFile}`
    : fallbackImage;

  const bgImage = selectedFood?.bg ? `${CDN}${selectedFood.bg}` : "";

  return (
    <div className="review-frame">
      <div className="div">
        <div
          className="close-button"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />

        <div className="review-display">
          <div className="food-big-display">
            <div className="overlap-group">
              <img
                className="food-background"
                alt="Food background"
                src={bgImage}
              />
              <img className="food-front" alt="Food front" src={bigImage} />
            </div>
          </div>

          <div className="review-star-grid">
            {[...Array(5)].map((_, i) => (
              <StarFrame
                key={i}
                isActive={i < rating}
                onClick={() => setRating(i + 1)}
              />
            ))}
          </div>

          <div className="review-text" />
        </div>

        <div className="overlap">
          <div className="review-title">Review</div>
          <div className="status-UI">
            <div className="main-button">
              <img
                className="UI-customer"
                alt="UI customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon1-1.png"
              />
              <img
                className="UI-customer"
                alt="UI customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon3-1.png"
              />
              <img
                className="UI-customer"
                alt="UI customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon5-1.png"
              />
            </div>
          </div>
        </div>

        <div className="customer-display">
          <div className="text-wrapper">Realcost_MorronError</div>
          <img
            className="customer-image"
            alt="Customer image"
            src={customerImage}
          />
        </div>

        <div className="food-icon-group-2">
          <img
            className="img"
            alt="Food icon"
            src={
              selectedFood?.file
                ? `${CDN}${selectedFood.file}`
                : "https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682dd5f99fc6c14743fad6a5/img/foodicon.png"
            }
          />
          <p className="p">
            {selectedFood?.name || "Strawberry And Chocolate Soft serve"}
          </p>
          <div className="order-header">Order</div>
        </div>

        <button className="back-button" onClick={onBack}>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Back</div>
            </div>
          </div>
        </button>

        <button className="confirm-button" onClick={onNext}>
          <div className="overlap-group-2">
            <div className="text-wrapper-2">Next</div>
          </div>
        </button>
      </div>
    </div>
  );
};

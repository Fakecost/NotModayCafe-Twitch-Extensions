import React, { useState } from "react";
import { StarFrame } from "../../components/StarFrame";
import { availableFoods } from "../../Data.generated";
import "./style.css";

// โหลดรูปทั้งหมดใน local
const allImages = import.meta.glob("/src/PNG-*/**/*.png", { eager: true });
const customerImages = import.meta.glob("/src/PNG-Customer/*.png", {
  eager: true,
});
const iconImages = import.meta.glob("/src/Sprite-Extension/*.png", {
  eager: true,
});

// Utility หา path จาก string
const getImage = (relativePath) => {
  const cleanPath = relativePath.split("?")[0];
  return (
    Object.entries(allImages).find(([key]) =>
      key.endsWith("/" + cleanPath)
    )?.[1].default || ""
  );
};

const getCustomerImage = (file) => {
  return (
    Object.entries(customerImages).find(([key]) =>
      key.endsWith(`/${file}`)
    )?.[1].default || ""
  );
};

export const ReviewFrame = ({
  onBack,
  onNext,
  onClose,
  selectedSkin,
  selectedFood,
}) => {
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState("");

  const customerImage = selectedSkin?.file
    ? getCustomerImage(selectedSkin.file)
    : "";
  const fallbackImage = getImage("PNG-Foods/Food-Food-Thai-PadThai-export.png"); // ใช้รูป local แทน fallback เดิม
  const bigImage = selectedFood?.bigFile
    ? getImage(selectedFood.bigFile)
    : fallbackImage;
  const foodIcon = selectedFood?.file
    ? getImage(selectedFood.file)
    : fallbackImage;

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
            <img
              className="food-background"
              alt="Food background"
              src={bigImage}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
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

          <div className="review-text-wrapper">
            <textarea
              className="review-textarea"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              maxLength={100}
              placeholder="Write your review here (max 100 characters)..."
            />
          </div>
        </div>

        <div className="overlap">
          <div className="review-title">Review</div>
          <div className="status-UI">
            <div className="main-button">
              {[
                "UI-Customer-Icon1.png",
                "UI-Customer-Icon3.png",
                "UI-Customer-Icon5.png",
              ].map((icon) => (
                <img
                  key={icon}
                  className="UI-customer"
                  alt="UI customer"
                  src={getImage(`Sprite-Extension/${icon}`)}
                />
              ))}
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
          <img className="img" alt="Food icon" src={foodIcon} />
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

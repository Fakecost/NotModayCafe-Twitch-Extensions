import React, { useState } from "react";
import { StarFrame } from "../../components/StarFrame";
import { availableFoods } from "../../Data.generated";
import "./style.css";

// โหลดรูปทั้งหมดใน local
const allImages = import.meta.glob("/src/PNG-*/**/*.{png,jpg,webp}", {
  eager: true,
});
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

const getIcon = (name) =>
  Object.entries(iconImages).find(([path]) => path.includes(name))?.[1]
    ?.default;

// ✅ SPRITE SHEET CONFIG

// ✅ ฟังก์ชันจัด style
const normalize = (p) =>
  p
    ?.replace(/^\.?\/?src\//, "")
    .replace(/^\.\//, "")
    .replace(/^\/+/, "");

const getSpriteStyle = (index, spritePath) => {
  if (!index || !spritePath) return {};
  const SPRITE_WIDTH = 345.6;
  const SPRITE_HEIGHT = 194.4;
  const SPRITE_COLS_BY_PATH = {
    "PNG-Foods/FoodSpriteSheet.png": 14,
    "PNG-Drinks/DrinkSpriteSheet.png": 13,
    "PNG-Desserts/DessertSpriteSheet.png": 14,
  };

  const cleanPath = normalize(spritePath);
  const cols = SPRITE_COLS_BY_PATH[cleanPath] || 1;
  const zeroIndex = index - 1;

  const x = (zeroIndex % cols) * SPRITE_WIDTH;
  const y = Math.floor(zeroIndex / cols) * SPRITE_HEIGHT;

  console.log(cleanPath);

  return {
    width: `${SPRITE_WIDTH}px`,
    height: `${SPRITE_HEIGHT}px`,
    backgroundImage: `url(${getImage(cleanPath)})`,
    backgroundPosition: `-${x}px -${y}px`,
    backgroundSize: `${cols * SPRITE_WIDTH}px auto`,
    imageRendering: "pixelated",
    position: "absolute",
    top: "49.5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
};

const getCustomerSpriteStyle = (index) => {
  const SPRITE_PATH = "PNG-Customer/CustomerSpriteSheet.png";
  const SPRITE_WIDTH = 280;
  const SPRITE_HEIGHT = 350;
  const COLUMNS = 6;

  const x = (index % COLUMNS) * SPRITE_WIDTH;
  const y = Math.floor(index / COLUMNS) * SPRITE_HEIGHT;

  return {
    backgroundImage: `url(${getImage(SPRITE_PATH)})`,
    backgroundPosition: `-${x}px -${y}px`,
    backgroundSize: `${COLUMNS * SPRITE_WIDTH}px auto`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
    width: `${SPRITE_WIDTH}px`,
    height: `${SPRITE_HEIGHT}px`,
    transform: "scale(0.48)",
    transformOrigin: "top left",
    position: "absolute",
    top: "-10px",
    left: "0px",
  };
};

const getFoodImage = (relativePath) => {
  const clean = relativePath.replace(/^\/+/, "");
  const match = Object.entries(allImages).find(([key]) =>
    key.endsWith("/" + clean)
  );
  return match?.[1]?.default || "";
};

const getSmallFoodSpriteStyle = (index, spritePath) => {
  if (!index || !spritePath) return {};
  const SPRITE_WIDTH = 100;
  const SPRITE_HEIGHT = 100;
  const SPRITE_COLS_BY_PATH = {
    "PNG-Foods/SmallFoodSpriteSheet.png": 13,
    "PNG-Drinks/SmallDrinkSpriteSheet.png": 13,
    "PNG-Desserts/SmallDessertSpriteSheet.png": 10,
  };
  const cleanPath = normalize(spritePath);
  const cols = SPRITE_COLS_BY_PATH[cleanPath] || 1;
  const zeroIndex = index - 1;

  const x = (zeroIndex % cols) * SPRITE_WIDTH;
  const y = Math.floor(zeroIndex / cols) * SPRITE_HEIGHT;
  const spriteURL = getFoodImage(cleanPath);

  return {
    backgroundImage: `url(${spriteURL})`,
    backgroundPosition: `-${x}px -${y}px`,
    backgroundSize: `${cols * SPRITE_WIDTH}px auto`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
  };
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

  const fallbackImage = getImage("PNG-Foods/Food-Food-Thai-PadThai-export.png");
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
            <div
              className="food-background"
              style={{
                ...(selectedFood?.bigFile && selectedFood?.index
                  ? getSpriteStyle(selectedFood.index, selectedFood.bigFile)
                  : {
                      backgroundImage: `url(${fallbackImage})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "100%",
                    }),
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
              <img
                className="UI-customer"
                alt="UI customer"
                src={getIcon("UI-Customer-Icon1")}
              />
              <img
                className="UI-customer"
                alt="UI customer"
                src={getIcon("UI-Customer-Icon3")}
              />
              <img
                className="UI-customer"
                alt="UI customer"
                src={getIcon("UI-Customer-Icon6")}
              />
            </div>
          </div>
        </div>

        <div className="customer-display">
          <div className="text-wrapper">Realcost_MorronError</div>
          <div
            className="customer-image"
            style={getCustomerSpriteStyle(selectedSkin?.spriteIndex)}
          />
        </div>

        <div className="food-icon-group-2">
          <div
            className="img"
            style={getSmallFoodSpriteStyle(
              selectedFood?.index,
              selectedFood?.file
            )}
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
            <div className="text-wrapper-2">Confirm</div>
          </div>
        </button>
      </div>
    </div>
  );
};

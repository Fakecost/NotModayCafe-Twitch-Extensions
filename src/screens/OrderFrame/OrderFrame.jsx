import React, { useEffect } from "react";
import { FoodButton } from "../../components/FoodButton";
import { availableSkins } from "../../Data";
import { availableFoods } from "../../Data.generated";
import "./style.css";

const allImages = import.meta.glob("/src/PNG-*/**/*.{png,jpg,webp}", {
  eager: true,
});
const iconImages = import.meta.glob("../../Sprite-Extension/*.png", {
  eager: true,
});

const getImage = (path) =>
  Object.entries(allImages).find(([k]) => k.endsWith(path))?.[1]?.default || "";
const getIcon = (name) =>
  Object.entries(iconImages).find(([path]) => path.includes(name))?.[1]
    ?.default;

const normalize = (p) =>
  p
    ?.replace(/^\.?\/?src\//, "")
    .replace(/^\.\//, "")
    .replace(/^\/+/, "");

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
  const spriteURL = getImage(cleanPath);
  console.log(cleanPath);
  return {
    backgroundImage: `url(${spriteURL})`,
    backgroundPosition: `-${x}px -${y}px`,
    backgroundSize: `${cols * SPRITE_WIDTH}px auto`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
  };
};
const getCustomerSpriteStyle = (index) => {
  const SPRITE_PATH = "/src/PNG-Customer/CustomerSpriteSheet.png";
  const SPRITE_WIDTH = 280;
  const SPRITE_HEIGHT = 350;
  const COLUMNS = 6;
  const x = (index % COLUMNS) * SPRITE_WIDTH;
  const y = Math.floor(index / COLUMNS) * SPRITE_HEIGHT;
  const spriteURL = getImage(SPRITE_PATH);

  return {
    backgroundImage: `url(${spriteURL})`,
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

export const OrderFrame = ({
  onClose,
  onNext,
  onBack,
  selectedSkin,
  selectedFood,
  setSelectedFood,
  username = "Customer",
}) => {
  const skin =
    selectedSkin && typeof selectedSkin.spriteIndex === "number"
      ? selectedSkin
      : availableSkins[Math.floor(Math.random() * availableSkins.length)];

  useEffect(() => {
    if (availableFoods.length > 0) {
      setSelectedFood(availableFoods[0]);
    }
  }, []);

  return (
    <div className="order-frame">
      <div className="div-3">
        <div
          className="close-button-3"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />

        {/* FOOD SELECTION GRID */}
        <div className="food-grid">
          <div className="container-2">
            {availableFoods.map((food) => {
              const isSelected = selectedFood?.id === food.id;
              return (
                <FoodButton
                  key={food.id}
                  className="food-button"
                  name={food.name}
                  image={getSmallFoodSpriteStyle(food.index, food.file)}
                  onClick={() => setSelectedFood(food)}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <button className="back-button-wrapper" onClick={onBack}>
          <div className="overlap-group-wrapper-2">
            <div className="overlap-group-5">
              <div className="text-wrapper-4">Back</div>
            </div>
          </div>
        </button>

        <button className="next-button" onClick={onNext}>
          <div className="overlap-group-wrapper-2">
            <div className="overlap-group-6">
              <div className="text-wrapper-4">Next</div>
            </div>
          </div>
        </button>

        {/* TITLE + STATUS UI */}
        <div className="overlap-3">
          <div className="order-title">Order your Dish</div>
          <div className="status-UI-2">
            <div className="main-button-3">
              <img
                className="UI-customer-icon"
                alt="UI customer"
                src={getIcon("UI-Customer-Icon1")}
              />
              <img
                className="UI-customer-icon"
                alt="UI customer"
                src={getIcon("UI-Customer-Icon4")}
              />
              <img
                className="UI-customer-icon"
                alt="UI customer"
                src={getIcon("UI-Customer-Icon5")}
              />
            </div>
          </div>
        </div>

        {/* CUSTOMER SPRITE */}
        <div className="customer-display-2">
          <div className="queue-name-2">{username}</div>
          <div
            className="customer-image-2"
            style={getCustomerSpriteStyle(skin.spriteIndex)}
          />
        </div>

        {/* FOOD SUMMARY */}
        <div className="food-icon-group-3">
          <div
            className="food-icon-2"
            alt="Food icon"
            style={getSmallFoodSpriteStyle(
              selectedFood?.index,
              selectedFood?.file
            )}
          />
          <p className="food-name-2">
            {selectedFood?.name || "Strawberry And Chocolate Soft serve"}
          </p>
          <div className="order-header-2">Order</div>
        </div>
      </div>
    </div>
  );
};

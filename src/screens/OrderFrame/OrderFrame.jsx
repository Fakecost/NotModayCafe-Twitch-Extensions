import React, { useEffect } from "react";
import { FoodButton } from "../../components/FoodButton";
import { availableSkins } from "../../Data";
import { availableFoods } from "../../Data.generated";
import "./style.css";

// ✅ โหลดภาพทั้งหมด
const allImages = import.meta.glob("/src/PNG-*/**/*{png,jpg,webp}", {
  eager: true,
});
const customerImages = import.meta.glob("../../PNG-Customer/*.png", {
  eager: true,
});
const iconImages = import.meta.glob("../../Sprite-Extension/*.png", {
  eager: true,
});

// ✅ Utility สำหรับ map path จาก string
const getImage = (relativePath) => {
  const cleanPath = relativePath.split("?")[0]; // ตัด query string ทิ้ง
  const match = Object.entries(allImages).find(([key]) => {
    return key.endsWith("/" + cleanPath);
  });
  console.log("🔍 Searching:", cleanPath, "→ Found:", match?.[0]); // ✅ Debug ได้
  return match?.[1].default;
};

const getCustomerImage = (file) =>
  Object.entries(customerImages).find(([key]) => key.endsWith(`/${file}`))?.[1]
    ?.default;

const getIcon = (name) =>
  Object.entries(iconImages).find(([path]) => path.includes(name))?.[1]
    ?.default;

export const OrderFrame = ({
  onClose,
  onNext,
  onBack,
  selectedSkin,
  selectedFood,
  setSelectedFood,
}) => {
  const skin =
    selectedSkin && selectedSkin.file
      ? selectedSkin
      : availableSkins[Math.floor(Math.random() * availableSkins.length)];

  const customerImage = getCustomerImage(skin.file);

  useEffect(() => {
    if (availableFoods.length > 0) {
      setSelectedFood(availableFoods[0]); // ✅ เลือกเมนูแรกเสมอ
    }
  }, []);

  const selectedFoodImage = selectedFood?.bigFile
    ? getImage(selectedFood.file)
    : null;

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
            {availableFoods.map((food) => {
              const imageUrl = getImage(food.file);
              console.log(food.file);
              const isSelected = selectedFood?.id === food.id;
              return (
                <FoodButton
                  key={food.id}
                  className="food-button"
                  name={food.name}
                  image={imageUrl}
                  onClick={() => setSelectedFood(food)}
                  isSelected={isSelected}
                />
              );
            })}
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
            src={selectedFoodImage || "/fallback/foodicon.png"}
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

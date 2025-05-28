import React, { useState } from "react";
import { CustomerButtonWrapper } from "../../components/CustomerButtonWrapper";
import { availableSkins } from "../../Data";
import "./style.css";

const ICON_IMAGE_BASE = "/images/Sprite-Extension/";

// ⭐ โหลดทุก PNG ใน PNG-Customer แบบ dynamic
const skinImages = import.meta.glob("../../PNG-Customer/*.png", {
  eager: true,
});
const iconImages = import.meta.glob("/src/Sprite-Extension/*.png", {
  eager: true,
});
const getIcon = (name) =>
  Object.entries(iconImages).find(([path]) => path.includes(name))?.[1]
    ?.default;
export const JoinFrame = ({ onClose, onNext }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    const indexToUse =
      selectedIndex != null
        ? selectedIndex
        : Math.floor(Math.random() * availableSkins.length);

    const selectedSkin = availableSkins[indexToUse];
    onNext(selectedSkin);
  };

  return (
    <div className="join-frame">
      <div className="div-4">
        <div
          className="close-button-4"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />

        <div className="overlap">
          <div className="review-title">Choose your character as Customer</div>
          <div className="status-UI">
            <div className="main-button">
              <img
                className="UI-customer"
                alt="UI customer"
                src={getIcon("UI-Customer-Icon2")}
              />
              <img
                className="UI-customer"
                alt="UI customer"
                src={getIcon("UI-Customer-Icon3")}
              />
              <img
                className="UI-customer"
                alt="UI customer"
                src={getIcon("UI-Customer-Icon5")}
              />
            </div>
          </div>
        </div>

        <div className="customer-grid">
          <div className="container-3">
            {availableSkins.map((skin, i) => {
              const imagePath = Object.entries(skinImages).find(([path]) =>
                path.endsWith(`/${skin.file}`)
              )?.[1]?.default;

              return (
                <CustomerButtonWrapper
                  key={skin.id}
                  index={skin.spriteIndex} // ✅ ส่ง path จริงเข้า src
                  isSelected={selectedIndex === i}
                  onClick={() => setSelectedIndex(i)}
                />
              );
            })}
          </div>
        </div>

        <button
          className="next-button-2"
          onClick={handleNext}
          style={{ cursor: "pointer" }}
        >
          <div className="text-wrapper-5">Next</div>
        </button>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { CustomerButtonWrapper } from "../../components/CustomerButtonWrapper";
import { availableSkins } from "../../Data";
import "./style.css";

const CDN = "https://sunny.bixmy.party/cdn/images/Customer/";

export const JoinFrame = ({ onClose, onNext }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    const indexToUse =
      selectedIndex != null
        ? selectedIndex
        : Math.floor(Math.random() * availableSkins.length);

    const selectedSkin = availableSkins[indexToUse];
    onNext(selectedSkin); // ✅ ส่ง object กลับ
  };

  return (
    <div className="join-frame">
      <div className="div-4">
        <div
          className="close-button-4"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />

        <div className="overlap-group-7">
          <div className="status-UI-3">
            <div className="main-button-4">
              <img
                className="UI-customer-2"
                alt="Ui customer"
                src={`https://sunny.bixmy.party/cdn/images/sprite-extension/UI-Customer-Icon2.png`}
              />
              <img
                className="UI-customer-2"
                alt="Ui customer"
                src={`https://sunny.bixmy.party/cdn/images/sprite-extension/UI-Customer-Icon3.png`}
              />
              <img
                className="UI-customer-2"
                alt="Ui customer"
                src={`https://sunny.bixmy.party/cdn/images/sprite-extension/UI-Customer-Icon5.png`}
              />
            </div>
          </div>
          <p className="customer-title">Choose your character as Customer</p>
        </div>

        <div className="customer-grid">
          <div className="container-3">
            {availableSkins.map((skin, i) => (
              <CustomerButtonWrapper
                key={skin.id}
                customerIcon={`${CDN}${skin.file}`}
                isSelected={selectedIndex === i}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
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

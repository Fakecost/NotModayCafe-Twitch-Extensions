import React, { useState, useRef } from "react";
import { CustomerButton } from "../../components/CustomerButton";
import { QueueButton } from "../../components/QueueButton";
import { StaffButton } from "../../components/StaffButton";
import { QueueFrame } from "../QueueFrame";
import { JoinFrame } from "../JoinFrame";
import { OrderFrame } from "../OrderFrame";
import { ReviewFrame } from "../ReviewFrame";
import "../../global.css";
import "./style.css";

export const Main = () => {
  const [activeFrame, setActiveFrame] = useState(null);
  const [selectedSkin, setSelectedSkin] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      const stillInside =
        containerRef.current?.matches(":hover") ||
        buttonRef.current?.matches(":hover");

      if (!stillInside) {
        setIsHovering(false);
      }
    }, 100);
  };

  return (
    <div
      className="main"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`main-button-wrapper ${
          isHovering ? "slide-in" : "slide-out"
        }`}
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="main-button-2">
          <QueueButton onClick={() => setActiveFrame("queue")} />
          <CustomerButton onClick={() => setActiveFrame("join")} />
          {false && <StaffButton />}
        </div>
      </div>

      {/* Renders */}
      {activeFrame === "queue" && (
        <div className="overlay">
          <QueueFrame
            onClose={() => setActiveFrame(null)}
            onJoinClick={() => setActiveFrame("join")}
          />
        </div>
      )}
      {activeFrame === "join" && (
        <div className="overlay">
          <JoinFrame
            onClose={() => setActiveFrame(null)}
            onNext={(skin) => {
              setSelectedSkin(skin);
              setActiveFrame("order");
            }}
          />
        </div>
      )}
      {activeFrame === "order" && (
        <div className="overlay">
          <OrderFrame
            selectedSkin={selectedSkin}
            selectedFood={selectedFood}
            setSelectedFood={setSelectedFood}
            onClose={() => setActiveFrame(null)}
            onBack={() => setActiveFrame("join")}
            onNext={() => setActiveFrame("review")}
          />
        </div>
      )}
      {activeFrame === "review" && (
        <div className="overlay">
          <ReviewFrame
            selectedSkin={selectedSkin}
            selectedFood={selectedFood}
            onClose={() => setActiveFrame(null)}
            onBack={() => setActiveFrame("order")}
            onNext={() => setActiveFrame("queue")}
          />
        </div>
      )}
    </div>
  );
};

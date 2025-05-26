import React, { useState, useRef, useEffect } from "react";
import { CustomerButton } from "../../components/CustomerButton";
import { QueueButton } from "../../components/QueueButton";
import { StaffButton } from "../../components/StaffButton";
import { QueueFrame } from "../QueueFrame";
import { JoinFrame } from "../JoinFrame";
import { OrderFrame } from "../OrderFrame";
import { ReviewFrame } from "../ReviewFrame";
import "../../global.css";
import "./style.css";

// ✅ Auto-skip identity in dev environment
const isLocalDev =
  window.location.hostname.includes("localhost") ||
  window.location.hostname.includes("127.0.0.1") ||
  window.location.hostname.includes("codesandbox.io");

export const Main = () => {
  const [activeFrame, setActiveFrame] = useState(null);
  const [selectedSkin, setSelectedSkin] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isIdentityLinked, setIsIdentityLinked] = useState(isLocalDev); // ✅ default true if local dev

  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setTimeout(() => {
      const stillInside =
        containerRef.current?.matches(":hover") ||
        buttonRef.current?.matches(":hover");
      if (!stillInside) setIsHovering(false);
    }, 100);
  };

  useEffect(() => {
    if (!isLocalDev && window.Twitch && window.Twitch.ext) {
      window.Twitch.ext.onAuthorized((auth) => {
        const userId = auth.userId;
        if (userId && !userId.startsWith("U")) {
          console.log("✅ Identity linked:", userId);
          setIsIdentityLinked(true);
        } else {
          console.log("🔒 Identity not linked yet");
        }
      });
    }
  }, []);

  const handleConnect = () => {
    if (window.Twitch?.ext?.actions?.requestIdShare) {
      window.Twitch.ext.actions.requestIdShare();
      setTimeout(() => window.location.reload(), 2000);
    }
  };

  if (!isIdentityLinked) {
    return (
      <div className="main connect-wrapper">
        <button className="connect-button" onClick={handleConnect}>
          Connect with Twitch
        </button>
      </div>
    );
  }

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

      {/* Overlay Render */}
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

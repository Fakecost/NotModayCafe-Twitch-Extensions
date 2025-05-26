import React, { useState, useEffect, useRef } from "react";
import { CustomerButton } from "../../components/CustomerButton";
import { QueueButton } from "../../components/QueueButton";
import { StaffButton } from "../../components/StaffButton";
import { QueueFrame } from "../QueueFrame";
import { JoinFrame } from "../JoinFrame";
import { OrderFrame } from "../OrderFrame";
import { ReviewFrame } from "../ReviewFrame";
import "../../global.css";
import "./style.css";

// ✅ Detect local dev (auto skip identity)
const isLocalDev =
  window.location.hostname.includes("localhost") ||
  window.location.hostname.includes("127.0.0.1") ||
  window.location.hostname.includes("codesandbox.io");

export const Main = () => {
  const [activeFrame, setActiveFrame] = useState(null);
  const [selectedSkin, setSelectedSkin] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isIdentityLinked, setIsIdentityLinked] = useState(isLocalDev);
  const [token, setToken] = useState(null);

  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  // ✅ Mouse hover for slide-in menu
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setTimeout(() => {
      const stillInside =
        containerRef.current?.matches(":hover") ||
        buttonRef.current?.matches(":hover");
      if (!stillInside) setIsHovering(false);
    }, 100);
  };

  // ✅ Wait for Twitch.ext to be ready
  useEffect(() => {
    if (isLocalDev) return;

    const waitForTwitch = setInterval(() => {
      if (window.Twitch && window.Twitch.ext) {
        console.log("✅ Twitch.ext ready");

        window.Twitch.ext.onAuthorized((auth) => {
          console.log("🟣 Authorized:", auth);
          setToken(auth.token);

          fetch("https://sunny.bixmy.party/extension/login", {
            method: "POST",
            headers: {
              Authorization: "Bearer " + auth.token,
              "Content-Type": "application/json"
            }
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.userId && !data.userId.startsWith("U")) {
                setIsIdentityLinked(true);
                console.log("✅ Identity linked:", data.userId);
              }
            })
            .catch((err) => {
              console.warn("⚠️ Twitch identity check failed", err);
            });
        });

        clearInterval(waitForTwitch);
      }
    }, 100);
    return () => clearInterval(waitForTwitch);
  }, []);

  // ✅ When user clicks "Connect with Twitch"
  const handleConnect = () => {
    if (window.Twitch?.ext?.actions?.requestIdShare) {
      window.Twitch.ext.actions.requestIdShare();

      setTimeout(() => {
        if (!token) return;
        fetch("https://sunny.bixmy.party/extension/login", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          }
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.userId && !data.userId.startsWith("U")) {
              setIsIdentityLinked(true);
              console.log("✅ Identity linked after requestIdShare");
            }
          });
      }, 3000);
    } else {
      console.warn("❌ Twitch.ext.actions.requestIdShare not available");
    }
  };

  // ✅ Show Connect UI if not linked
  if (!isIdentityLinked) {
    return (
      <div className="main connect-wrapper">
        <button className="connect-button" onClick={handleConnect}>
          Connect with Twitch
        </button>
      </div>
    );
  }

  // ✅ Main UI + Sliding Buttons
  return (
    <div
      className="main"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`main-button-wrapper ${isHovering ? "slide-in" : "slide-out"}`}
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

      {/* === Overlay Frame === */}
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
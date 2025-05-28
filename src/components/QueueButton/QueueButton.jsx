import React from "react";
import "./style.css";
import bubbleImg from "../../Sprite-Extension/UI-General-Icon4.png";
import bubbleImgInCafe from "../../Sprite-Extension/UI-General-Icon5.png";

export const QueueButton = ({ className = "", onClick, queueIndex = null, inCafe = false }) => {
  let showBubble = false;
  let bubbleSrc = bubbleImg;
  let bubbleText = "";

  if (inCafe) {
    showBubble = true;
    bubbleSrc = bubbleImgInCafe;
    bubbleText = ""; // ไม่แสดงเลข
  } else if (queueIndex !== null && queueIndex >= 0) {
    showBubble = true;
    bubbleSrc = bubbleImg;
    bubbleText = queueIndex >= 10 ? "10+" : `${queueIndex + 1}`;
  }

  return (
    <div className="queue-button-wrapper">
      <div className={`queue-button ${className}`} onClick={onClick} />

      {showBubble && (
        <div className="queue-bubble">
          <img src={bubbleSrc} alt="bubble" className="bubble-bg" />
          {bubbleText && <div className="bubble-text">{bubbleText}</div>}
        </div>
      )}
    </div>
  );
};
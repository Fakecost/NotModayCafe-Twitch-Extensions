import React from "react";
import "./style.css";

export const QueueItem = ({
  userName = "Unknown",
  characterName = "default",
  menuName = "Unknown",
  index = 0,
}) => {
  return (
    <div className="queue-item">
      <div className="number">{index + 1}</div>

      <img
        className="queue-icon"
        alt={`${characterName}`}
        src={`/img/${characterName.toLowerCase()}.png`}
        onError={(e) => (e.target.src = "/img/default.png")}
      />

      <div className="queue-detail">
        <div className="queue-name">{userName}</div>
        <p className="order-name">Order: {menuName}</p>
      </div>
    </div>
  );
};

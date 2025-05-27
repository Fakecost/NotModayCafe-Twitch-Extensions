import React from "react";
import { Link } from "react-router-dom";
import { QueueItem } from "../../components/QueueItem";
import "./style.css";

export const QueueFrame = ({ onClose, onJoinClick, gameState }) => {
  const queueData = gameState?.availableQueueDataForExtensions || [];

  return (
    <div className="queue-frame">
      <div className="div-2">
        <div
          className="close-button-2"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />

        <button
          className="join-button"
          onClick={onJoinClick}
          style={{ cursor: "pointer" }}
        >
          <div className="button">
            <div className="overlap-group-3">
              <div className="text-wrapper-3">Join</div>
            </div>
          </div>
        </button>

        <div className="queue-title">Queue</div>

        <div className="grid">
          {queueData.map((item, index) => (
            <QueueItem
              key={`queue-${index}`}
              index={index}
              userName={item.userName}
              characterName={item.characterName}
              menuName={item.menuName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

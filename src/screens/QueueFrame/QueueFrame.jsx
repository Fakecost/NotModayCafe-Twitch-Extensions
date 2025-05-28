import React from "react";
import { QueueItem } from "../../components/QueueItem";
import "./style.css";

export const QueueFrame = ({
  onClose,
  onJoinClick,
  gameState,
  inCafe,
  isInQueue,
}) => {
  const disableJoin = inCafe || isInQueue;
  const queueData = gameState?.availableQueueDataForExtensions || [];
  const inCafeData = gameState?.inCafeInfo || [];

  return (
    <div className="queue-frame">
      <div className="div-2">
        <div
          className="close-button-2"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />

        <button
          className={`join-button ${disableJoin ? "disabled" : ""}`}
          onClick={() => {
            if (!disableJoin) onJoinClick();
          }}
          disabled={disableJoin}
        >
          <div className="button">
            <div className={`overlap-group-3 ${inCafe ? "disabled" : ""}`}>
              <div className="text-wrapper-3">Join</div>
            </div>
          </div>
        </button>

        <div className="queue-title">Queue</div>

        <div className="grid">
          {/* 👇 คนที่อยู่ในร้าน แสดงบนสุด */}
          {inCafeData.map((item, idx) => (
            <QueueItem
              key={`cafe-${idx}`}
              userName={item.userName}
              characterName={item.currentCharacterName}
              menuName="In Cafe"
              index={-1} // ไม่แสดงเลข
              isInCafe={true}
            />
          ))}

          {/* 👇 คนที่ต่อคิว แสดงถัดมา */}
          {queueData.map((item, index) => (
            <QueueItem
              key={`queue-${index}`}
              index={index}
              userName={item.userName}
              characterName={item.characterName}
              menuName={item.menuName}
              isInCafe={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

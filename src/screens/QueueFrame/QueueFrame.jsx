import React from "react";
import { Link } from "react-router-dom";
import { QueueItem } from "../../components/QueueItem";
import "./style.css";

export const QueueFrame = ({ onClose, onJoinClick }) => {
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

        <div className="grid">
          <div className="container">
            <div className="overlap-group-4">
              <QueueItem className="queue-item-instance" />
              <QueueItem className="queue-item-2" />
              <QueueItem className="queue-item-3" />
              <QueueItem className="queue-item-4" />
              <QueueItem className="queue-item-5" />
              <QueueItem className="queue-item-6" />
            </div>

            <div className="overlap-2">
              <QueueItem className="queue-item-instance" />
              <QueueItem className="queue-item-2" />
              <QueueItem className="queue-item-3" />
              <QueueItem className="queue-item-4" />
              <QueueItem className="queue-item-5" />
              <QueueItem className="queue-item-6" />
            </div>
          </div>
        </div>

        <div className="queue-title">Queue</div>
      </div>
    </div>
  );
};

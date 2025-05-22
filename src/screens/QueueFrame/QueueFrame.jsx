import React from "react";
import { Link } from "react-router-dom";
import { QueueItem } from "../../components/QueueItem";
import "./style.css";

export const QueueFrame = () => {
  return (
    <div className="queue-frame">
      <div className="div-2">
        <div className="close-button-2" />

        <Link to="/join-frame">
          <button className="join-button">
            <button className="button">
              <div className="overlap-group-3">
                <div className="text-wrapper-3">Join</div>
              </div>
            </button>
          </button>
        </Link>

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

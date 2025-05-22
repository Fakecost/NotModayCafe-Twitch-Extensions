// ✅ Main.jsx (แก้ใหม่ทั้งหมด)
import React, { useState } from "react";
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

  return (
    <div className="main">
      <div className="main-button-wrapper">
        <div className="main-button-2">
          <QueueButton
            className="design-component-instance-node"
            onClick={() => setActiveFrame("queue")}
          />
          <CustomerButton className="design-component-instance-node" />
          <StaffButton className="design-component-instance-node" />
        </div>
      </div>

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
            onNext={() => setActiveFrame("order")}
          />
        </div>
      )}

      {activeFrame === "order" && (
        <div className="overlay">
          <OrderFrame
            onClose={() => setActiveFrame(null)}
            onBack={() => setActiveFrame("join")}
            onNext={() => setActiveFrame("review")}
          />
        </div>
      )}

      {activeFrame === "review" && (
        <div className="overlay">
          <ReviewFrame
            onClose={() => setActiveFrame(null)}
            onBack={() => setActiveFrame("order")}
            onNext={() => setActiveFrame("queue")}
          />
        </div>
      )}
    </div>
  );
};

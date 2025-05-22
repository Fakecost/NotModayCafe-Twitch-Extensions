/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const QueueItem = ({ className }) => {
  return (
    <div className={`queue-item ${className}`}>
      <div className="number">1</div>

      <img className="queue-icon" alt="Queue icon" src="/img/queueicon-3.png" />

      <div className="queue-detail">
        <div className="queue-name">Phupakorn</div>

        <p className="order-name">Order : Strawberry And Choclate Soft serve</p>
      </div>
    </div>
  );
};

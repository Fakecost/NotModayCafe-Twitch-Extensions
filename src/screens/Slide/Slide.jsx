import React from "react";
import { CustomerButton } from "../../components/CustomerButton";
import { QueueButton } from "../../components/QueueButton";
import { StaffButton } from "../../components/StaffButton";
import "./style.css";

export const Slide = () => {
  return (
    <div className="slide">
      <div className="main-button-wrapper-3">
        <div className="main-button-6">
          <QueueButton className="design-component-instance-node-3" />
          <CustomerButton className="design-component-instance-node-3" />
          <StaffButton className="design-component-instance-node-3" />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { CustomerButton } from "../../components/CustomerButton";
import { QueueButton } from "../../components/QueueButton";
import { StaffButton } from "../../components/StaffButton";
import "./style.css";

export const Current = () => {
  return (
    <div className="current">
      <div className="main-button-wrapper-2">
        <div className="main-button-5">
          <QueueButton className="design-component-instance-node-2" />
          <CustomerButton className="design-component-instance-node-2" />
          <StaffButton className="design-component-instance-node-2" />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { CustomerButton } from "../../components/CustomerButton";
import { QueueButton } from "../../components/QueueButton";
import { StaffButton } from "../../components/StaffButton";
import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-button-wrapper">
        <div className="main-button-2">
          <QueueButton className="design-component-instance-node" />
          <CustomerButton className="design-component-instance-node" />
          <StaffButton className="design-component-instance-node" />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./style.css";

export const QueueButton = ({ className, onClick }) => {
  return <div className={`queue-button ${className}`} onClick={onClick} />;
};

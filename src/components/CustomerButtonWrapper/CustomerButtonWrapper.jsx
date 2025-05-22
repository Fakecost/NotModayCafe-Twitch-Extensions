import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CustomerButtonWrapper = ({
  className = "",
  customerIcon = "/img/customericon-12.png",
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      className={`customer-button-wrapper ${className} ${
        isSelected ? "selected" : ""
      }`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img className="customer-icon" alt="Customer icon" src={customerIcon} />
    </div>
  );
};

CustomerButtonWrapper.propTypes = {
  customerIcon: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CustomerButtonWrapper = ({
  className,
  customerIcon = "/img/customericon-12.png",
}) => {
  return (
    <div className={`customer-button-wrapper ${className}`}>
      <img className="customer-icon" alt="Customer icon" src={customerIcon} />
    </div>
  );
};

CustomerButtonWrapper.propTypes = {
  customerIcon: PropTypes.string,
};

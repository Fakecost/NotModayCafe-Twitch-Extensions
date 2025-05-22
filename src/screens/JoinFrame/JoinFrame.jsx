import React from "react";
import { Link } from "react-router-dom";
import { CustomerButtonWrapper } from "../../components/CustomerButtonWrapper";
import "./style.css";

export const JoinFrame = () => {
  return (
    <div className="join-frame">
      <div className="div-4">
        <div className="close-button-4" />

        <div className="overlap-group-7">
          <div className="status-UI-3">
            <div className="main-button-4">
              <img
                className="UI-customer-2"
                alt="Ui customer"
                src="/img/ui-customer-icon1-1-7.png"
              />

              <img
                className="UI-customer-2"
                alt="Ui customer"
                src="/img/ui-customer-icon3-1-6.png"
              />

              <img
                className="UI-customer-2"
                alt="Ui customer"
                src="/img/ui-customer-icon5-1-7.png"
              />
            </div>
          </div>

          <p className="customer-title">Choose your character as Customer</p>
        </div>

        <div className="customer-grid">
          <div className="container-3">
            <CustomerButtonWrapper className="customer-button-instance" />
            <CustomerButtonWrapper
              className="customer-button-2"
              customerIcon="/img/customericon-13.png"
            />
            <CustomerButtonWrapper
              className="customer-button-3"
              customerIcon="/img/customericon-14.png"
            />
            <CustomerButtonWrapper
              className="customer-button-4"
              customerIcon="/img/customericon-15.png"
            />
            <CustomerButtonWrapper
              className="customer-button-5"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-6"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-7"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-8"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-9"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-10"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-11"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-12"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-13"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-14"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-15"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-16"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-17"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-18"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-19"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-20"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-21"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-22"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-23"
              customerIcon="/img/customericon-12.png"
            />
            <CustomerButtonWrapper
              className="customer-button-24"
              customerIcon="/img/customericon-12.png"
            />
          </div>
        </div>

        <Link to="/order-frame">
          <button className="next-button-2">
            <div className="text-wrapper-5">Next</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

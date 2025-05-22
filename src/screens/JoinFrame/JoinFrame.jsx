import React from "react";
import { CustomerButtonWrapper } from "../../components/CustomerButtonWrapper";
import "./style.css";

export const JoinFrame = ({ onClose, onNext }) => {
  return (
    <div className="join-frame">
      <div className="div-4">
        <div
          className="close-button-4"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />

        <div className="overlap-group-7">
          <div className="status-UI-3">
            <div className="main-button-4">
              <img
                className="UI-customer-2"
                alt="Ui customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon1-1-1.png"
              />
              <img
                className="UI-customer-2"
                alt="Ui customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon3-1.png"
              />
              <img
                className="UI-customer-2"
                alt="Ui customer"
                src="https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682d0bb2ad49702e312281a3/img/ui-customer-icon5-1-1.png"
              />
            </div>
          </div>
          <p className="customer-title">Choose your character as Customer</p>
        </div>

        <div className="customer-grid">
          <div className="container-3">
            <CustomerButtonWrapper className="customer-button-instance" />
            {[...Array(23)].map((_, i) => (
              <CustomerButtonWrapper
                key={i}
                className={`customer-button-${i + 2}`}
                customerIcon={`https://cdn.animaapp.com/projects/682af909abc7ae9309e7e566/releases/682dd5f99fc6c14743fad6a5/img/customericon${
                  i < 2 ? `-${i + 1}` : ""
                }.png`}
              />
            ))}
          </div>
        </div>

        <button
          className="next-button-2"
          onClick={onNext}
          style={{ cursor: "pointer" }}
        >
          <div className="text-wrapper-5">Next</div>
        </button>
      </div>
    </div>
  );
};

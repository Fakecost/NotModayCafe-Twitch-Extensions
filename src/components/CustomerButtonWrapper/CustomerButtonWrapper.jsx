import PropTypes from "prop-types";
import React from "react";
import "./style.css";

const allImages = import.meta.glob("/src/PNG-*/**/*.{png,jpg,webp}", {
  eager: true,
});
const getImage = (path) => allImages[path]?.default || "";

const getCustomerSpriteStyle = (index) => {
  const SPRITE_PATH = "/src/PNG-Customer/CustomerSpriteSheet.png";
  const SPRITE_WIDTH = 160;
  const SPRITE_HEIGHT = 200;
  const COLUMNS = 6;
  const x = (index % COLUMNS) * SPRITE_WIDTH;
  const y = Math.floor(index / COLUMNS) * SPRITE_HEIGHT;

  return {
    backgroundImage: `url(${getImage(SPRITE_PATH)})`,
    backgroundPosition: `-${x}px -${y}px`,
    backgroundSize: `${COLUMNS * SPRITE_WIDTH}px auto`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
    width: `${SPRITE_WIDTH}px`,
    height: `${SPRITE_HEIGHT}px`,
    transform: "scale(0.48)",
    transformOrigin: "top left",
    position: "absolute",
    top: "5px",
    left: "1px",
  };
};

export const CustomerButtonWrapper = ({
  index,
  isSelected = false,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`customer-button-wrapper ${className} ${
        isSelected ? "selected" : ""
      }`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="customer-icon" style={getCustomerSpriteStyle(index)} />
    </div>
  );
};

CustomerButtonWrapper.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

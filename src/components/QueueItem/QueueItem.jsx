import React from "react";
import "./style.css";
import { availableSkins } from "../../Data";

const allImages = import.meta.glob("/src/PNG-*/**/*.{png,jpg,webp}", { eager: true });

const getImage = (path) =>
  Object.entries(allImages).find(([k]) => k.endsWith(path))?.[1]?.default || "";

const getIndexFromCharacterName = (name) => {
  if (typeof name !== "string") return 0;
  const normalizedName = name.trim().toLowerCase();
  const found = availableSkins.find((skin) => (skin.id || "").trim().toLowerCase() === normalizedName);
  return found?.spriteIndex + 1 ?? 0;
};

const getCustomerSpriteStyle = (index) => {
  const SPRITE_PATH = "/src/PNG-Customer/CustomerIconSpriteSheet.png";
  const SPRITE_WIDTH = 60;
  const SPRITE_HEIGHT = 60;
  const COLUMNS = 8;
  const x = (index % COLUMNS) * SPRITE_WIDTH;
  const y = Math.floor(index / COLUMNS) * SPRITE_HEIGHT;
  const spriteURL = getImage(SPRITE_PATH);

  return {
    backgroundImage: `url(${spriteURL})`,
    backgroundPosition: `-${x}px -${y}px`,
    backgroundSize: `${COLUMNS * SPRITE_WIDTH}px auto`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
    width: `${SPRITE_WIDTH}px`,
    height: `${SPRITE_HEIGHT}px`,
  };
};

export const QueueItem = ({
  userName = "Unknown",
  characterName = "default",
  menuName = "Unknown",
  index = 0,
  isInCafe = false,
}) => {
  return (
    <div className={`queue-item ${isInCafe ? "in-cafe" : ""}` }>
     <div className="number" style={isInCafe ? { visibility: "hidden" } : {}}>
{index + 1}
</div>

      <div
        className="queue-icon"
        style={getCustomerSpriteStyle(getIndexFromCharacterName(characterName))}
        aria-label={characterName}
      />

      <div className="queue-detail">
        <div className="queue-name">{userName}</div>
        <p className="order-name">{menuName}</p>
      </div>
    </div>
  );
};
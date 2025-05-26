import React, { useState, useEffect } from "react";
import "./style.css";

const isLocalDev =
  window.location.hostname.includes("localhost") ||
  window.location.hostname.includes("127.0.0.1") ||
  window.location.hostname.includes("codesandbox.io");

export const Main = () => {
  const [isIdentityLinked, setIsIdentityLinked] = useState(isLocalDev);
  const [token, setToken] = useState(null);

  // ✅ รอให้ Twitch.ext พร้อมก่อนเรียก
  useEffect(() => {
    if (isLocalDev) return;

    const waitForTwitch = setInterval(() => {
      if (window.Twitch && window.Twitch.ext) {
        console.log("✅ Twitch.ext ready");

        window.Twitch.ext.onAuthorized((auth) => {
          console.log("🟪 Authorized:", auth);
          setToken(auth.token);

          // ✅ ตรวจ Identity จาก backend
          fetch("https://sunny.bixmy.party/extension/login", {
            method: "POST",
            headers: {
              Authorization: "Bearer " + auth.token,
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.userId && !data.userId.startsWith("U")) {
                console.log("✅ Identity linked from server:", data.userId);
                setIsIdentityLinked(true);
              } else {
                console.warn("🔒 Identity not granted yet");
              }
            })
            .catch((err) => {
              console.warn("⚠️ Could not check identity:", err);
            });
        });

        clearInterval(waitForTwitch);
      }
    }, 100);
    return () => clearInterval(waitForTwitch);
  }, []);

  // ✅ ปุ่ม Connect
  const handleConnect = () => {
    if (window.Twitch?.ext?.actions?.requestIdShare) {
      console.log("📣 requestIdShare called");
      window.Twitch.ext.actions.requestIdShare();

      // ✅ Poll ซ้ำภายหลังแทนการ reload
      setTimeout(() => {
        fetch("https://sunny.bixmy.party/extension/login", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.userId && !data.userId.startsWith("U")) {
              setIsIdentityLinked(true);
              console.log("✅ Grant success after Connect");
            } else {
              console.warn("❌ Grant still not linked");
            }
          });
      }, 3000);
    } else {
      console.warn("❌ Twitch.ext.actions.requestIdShare not available");
    }
  };

  if (!isIdentityLinked) {
    return (
      <div className="main connect-wrapper">
        <button className="connect-button" onClick={handleConnect}>
          Connect with Twitch
        </button>
      </div>
    );
  }

  // ⬇️ ที่เหลือของคุณ เช่นปุ่ม, overlay, gameplay ⬇️
  return (
    <div className="main">
      <div style={{ color: "white" }}>✅ Identity Linked</div>
    </div>
  );
};

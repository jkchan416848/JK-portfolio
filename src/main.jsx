import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Alert from "@mui/material/Alert";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Main() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(3); // Default duration
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const measureNetworkSpeed = async () => {
      const testStartTime = performance.now();
      let calculatedDuration = 3; // Default duration in seconds

      try {
        const testUrl = "https://via.placeholder.com/50";
        const response = await fetch(testUrl, { cache: "no-store" });

        if (response.ok) {
          const blob = await response.blob();
          const testEndTime = performance.now();
          const testDuration = testEndTime - testStartTime;
          const sizeInBits = blob.size * 8;
          const speedKbps = sizeInBits / (testDuration / 1000) / 1000;

          console.log(`Network speed: ${speedKbps.toFixed(2)} kbps`);

          // Set animation duration based on speed
          if (speedKbps < 100) {
            calculatedDuration = 4; // Slow network
          } else if (speedKbps >= 1000) {
            calculatedDuration = 2; // Fast network
          } else {
            calculatedDuration = 3; // Normal network
          }
        }
      } catch (error) {
        console.error("Network test failed:", error);
      }

      // Update animation duration state
      setAnimationDuration(calculatedDuration);

      const elapsedTime = performance.now() - testStartTime;
      const minDisplayTime = calculatedDuration * 1000; // Convert to ms

      // Ensure loader shows for at least animation duration
      if (elapsedTime < minDisplayTime) {
        const remainingTime = minDisplayTime - elapsedTime;
        timeoutRef.current = setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      } else {
        setIsLoading(false);
      }
    };

    if (isOnline) {
      measureNetworkSpeed();
    } else {
      setIsLoading(false);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOnline]);

  return (
    <React.StrictMode>
      <div className="main-container">
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              flexDirection: "column",
            }}>
            {/* Dynamic loader with duration based on network speed */}
            <div
              className="loader"
              style={{ "--animation-duration": `${animationDuration}s` }}>
              <div className="loader__bar" />
              <div className="loader__bar" />
              <div className="loader__bar" />
              <div className="loader__bar" />
              <div className="loader__bar" />
              <div className="loader__ball" />
            </div>
            <div
              className="loader-text text-info"
              style={{
                animationDuration: `${animationDuration}s`,
                marginTop: "20px",
              }}>
              Loading<span className="dot"> . </span>
              <span className="dot">. </span>
              <span className="dot">. </span>
            </div>
          </div>
        ) : isOnline ? (
          <App />
        ) : (
          <div className="mt-2 Error_module_cont">
            <div className="error-wrapper">
              <div className="floating-emoji">📡</div>
              <Alert severity="error">
                <span className="animated-text">
                  Hey! I think you forgot to turn on the data... Please connect
                  the internet... 🤗
                </span>
              </Alert>
            </div>
          </div>
        )}
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
export default Main;

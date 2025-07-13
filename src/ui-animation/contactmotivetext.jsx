import React, { useState, useEffect, useRef } from "react";
import "../Styles/RandomTextAnimation.css";

const ContactmotiveTextAnimation = () => {
  // Configuration
  const TEXTS1 = ["Pray...", "Trust...", "wait..."];
  const CHANGE_INTERVAL = 4000;
  const FADE_DURATION = 2000;
  const CHARACTER_ANIMATION_DURATION = 50;

  const [visible, setVisible] = useState(true);
  const [chars, setChars] = useState([]);
  const timerRef = useRef(null);

  const getRandomText = () => {
    const randomIndex1 = Math.floor(Math.random() * TEXTS1.length);
    return TEXTS1[randomIndex1];
  };

  const getRandomChar = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };

  useEffect(() => {
    if (!visible) return;

    let currentIndex = 0;
    const targetText = getRandomText();
    const newChars = Array(targetText.length)
      .fill(null)
      .map((_, i) => ({
        char: getRandomChar(),
        final: targetText[i],
        index: i,
      }));

    setChars(newChars);

    const interval = setInterval(() => {
      setChars((prev) =>
        prev.map((c, i) => ({
          ...c,
          char: i <= currentIndex ? c.final : getRandomChar(),
        }))
      );

      currentIndex++;
      if (currentIndex >= targetText.length) clearInterval(interval);
    }, CHARACTER_ANIMATION_DURATION);

    return () => clearInterval(interval);
  }, [visible]);

  useEffect(() => {
    const changeText = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), FADE_DURATION);
    };

    timerRef.current = setInterval(changeText, CHANGE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="text-animation-container-module">
      <div
        className="text-animation-display"
        style={{
          opacity: visible ? 0.9 : 0,
          transition: `opacity ${FADE_DURATION}ms ease-in-out`,
        }}>
        {chars.map((c, i) => (
          <span
            key={i}
            className={
              c.char === c.final ? "text-final-char" : "text-random-char"
            }>
            {c.char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContactmotiveTextAnimation;

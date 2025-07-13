import React, { useState, useEffect, useRef } from "react";
import "../Styles/RandomTextAnimation.css";

const RandomTextAnimation = () => {
  // Configuration
  const TEXTS = [
    "~ Welcome! ",
    "@ Jaya Kumar",
    "* Cool Effects",
    "$ Problem Sloving",
    "% Logical thinking",
    "# Coding",
    "⁖ Responsive design",
    "@ Jaya Kumar",
  ];
  const CHANGE_INTERVAL = 5000;
  const FADE_DURATION = 1000;
  const CHARACTER_ANIMATION_DURATION = 50;

  const [visible, setVisible] = useState(true);
  const [chars, setChars] = useState([]);
  const timerRef = useRef(null);

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * TEXTS.length);
    return TEXTS[randomIndex];
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
          opacity: visible ? 1 : 0,
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

export default RandomTextAnimation;

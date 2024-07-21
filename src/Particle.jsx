import React from "react";

const Particles = () => {
  const width = Math.random() * 2 + 1; // Random value between 2px and 12px
  const height = Math.random() * 2 + 1; // Random value between 2px and 12px
  const bottom = Math.random() * 100; // Random value between 0 and 100vh
  const right = Math.random() * 100; // Random value between 0 and 100vh
  const colors = ["rgb(190, 204, 219)", "#cbaa9f", "white"];
  const backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Pick a random color

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        bottom: `${bottom}%`,
        right: `${right}%`,
        backgroundColor: backgroundColor,
      }}
      className="particle absolute z-50"
    ></div>
  );
};

export default Particles;

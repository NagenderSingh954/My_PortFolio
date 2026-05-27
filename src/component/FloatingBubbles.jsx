import React from "react";

function FloatingBubbles() {
  const bubbles = Array.from({ length: 15 });

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      
      {bubbles.map((_, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white/20 animate-float"
          style={{
            width: `${100}px`,
            height: `${100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingBubbles;
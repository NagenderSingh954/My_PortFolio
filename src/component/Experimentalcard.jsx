import { useState } from "react";

export default function Experimentalcard() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const reset = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-80 h-48 bg-slate-800 rounded-2xl transition-transform duration-200"
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
      >
        <h2 className="text-white p-6">3D Card</h2>
      </div>
    </div>
  );
}
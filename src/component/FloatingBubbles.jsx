import { useEffect, useRef } from "react";

function FloatingBubbles() {
  const stageRef = useRef(null);
  const bubbles = Array.from({ length: 15 });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const circles = Array.from(
      stage.querySelectorAll(".skill-circle")
    );

    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;

        return (
          Math.sqrt(dx * dx + dy * dy) <
          p.size / 2 + size / 2 + 30
        );
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;

      let x;
      let y;
      let tries = 0;

      do {
        x = Math.random() * (rect.width - size);
        y = Math.random() * (rect.height - size);
        tries++;
      } while (
        isOverlapping(x, y, size) &&
        tries < 150
      );

      placed.push({ x, y, size });

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 120;
      const dy = (Math.random() - 0.5) * 120;

      circle.animate(
        [
          {
            transform: "translate(0,0)",
          },
          {
            transform: `translate(${dx}px, ${dy}px)`,
          },
        ],
        {
          duration: 6000 + Math.random() * 3000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section className="w-full h-screen bg-black p-7">
      <h1 className="text-emerald-400 text-2xl font-bold">
        MY Skills
      </h1>

      <div
        ref={stageRef}
        className="relative w-full h-[600px] overflow-hidden"
      >
        {bubbles.map((_, index) => (
          <div
            key={index}
            className="skill-circle absolute rounded-full bg-red-400"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default FloatingBubbles;
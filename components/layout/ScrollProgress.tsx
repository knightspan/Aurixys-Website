"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [meters, setMeters] = useState(0);
  const [knots, setKnots] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let lastT = performance.now();
    let smoothed = 0;

    const tick = () => {
      const y = window.scrollY;
      const t = performance.now();
      const dy = y - lastY;
      const dt = (t - lastT) / 1000;
      if (dt > 0) {
        // px/s → "knots" (1 px ≈ 0.000265 m, 1 m/s ≈ 1.943844 kn)
        const pxPerSec = dy / dt;
        const mPerSec = Math.abs(pxPerSec) * 0.000265;
        const kn = mPerSec * 1.943844;
        smoothed = smoothed * 0.85 + kn * 0.15;
        setKnots(smoothed);
      }
      setMeters(y * 0.000265);
      lastY = y;
      lastT = t;
    };

    let raf = requestAnimationFrame(function loop() {
      tick();
      raf = requestAnimationFrame(loop);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span className="text-mono text-ink-mute">
      Distance scrolled: {meters.toFixed(2)} m · Avg scroll speed: {knots.toFixed(2)} kts
    </span>
  );
}

"use client";

import { motion } from "framer-motion";

export default function GradientRing({ size = 240 }) {
  const ringSize = size; // outer size
  const innerGap = size * 0.24; // same proportion as inset-4 from your sample

  return (
    <div
      className="relative"
      style={{ width: ringSize, height: ringSize }}
    >
      {/* Animated Gradient Ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: innerGap * 0.5,
          background:
            "conic-gradient(from 0deg, #8B5CF6, #EC4899, #3B82F6, #06B6D4, #8B5CF6)",
          maskImage: "radial-gradient(circle, transparent 45%, black 55%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 45%, black 55%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner white circle */}
      <div
        className="absolute bg-white rounded-full shadow-inner"
        style={{ inset: innerGap }}
      />
    </div>
  );
}

"use client";

import React from "react";
import Particles from "../React-bits/Particles";

export default function index({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 -z-10  bg-primary-blue">
        <div className="w-full h-full">
          <Particles
            particleCount={1520}
            particleSpread={48}
            speed={0.38}
            particleColors={["#ffffff", "#ffffff", "#ffffff"]}
            moveParticlesOnHover={false}
            particleHoverFactor={0.7}
            alphaParticles
            particleBaseSize={150}
            sizeRandomness={1.6}
            cameraDistance={60}
            disableRotation={false}
          />
        </div>
      </div>
      {children}
    </>
  );
}

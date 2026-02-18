"use client";

import React from "react";
import Particles from "../React-bits/components/Particles";

export default function index({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 -z-10  bg-primary-blue">
        <div
          className=""
          style={{ width: "1080px", height: "1080px", position: "absolute" }}
        >
          <Particles
            particleCount={720}
            particleSpread={17}
            speed={0.38}
            particleColors={["#ffffff", "#ffffff", "#ffffff"]}
            moveParticlesOnHover={false}
            particleHoverFactor={0.7}
            alphaParticles
            particleBaseSize={150}
            sizeRandomness={1.6}
            cameraDistance={42}
            disableRotation={false}
          />
        </div>
      </div>
      {children}
    </>
  );
}

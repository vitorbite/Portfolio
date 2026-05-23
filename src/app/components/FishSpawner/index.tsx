"use client";
import { useEffect } from "react";

export default function FishSpawner() {
  useEffect(() => {
    let running = true;
    let fishCount = 0;
    const MAX_FISH = 15;

    function spawnFishInstance(offsetX = 0) {
      if (fishCount >= MAX_FISH) return;

      const img = document.createElement("img");
      img.className = "Peixe";
      img.src = "Peixe.png";
      img.alt = "peixe";
      
      const maxLeftPx = Math.max(20, window.innerWidth * 0.1);
      const leftPx = Math.min(20 + Math.floor(Math.random() * 30), maxLeftPx);
      img.style.left = `${leftPx + offsetX}px`;

      const scale = 0.7 + Math.random() * 0.8; 
      img.style.width = `${Math.round(60 * scale)}px`;
      img.style.height = "auto";
      img.style.pointerEvents = "none";
      
      const isMobile = window.innerWidth < 600;
      if (isMobile) {
        // img.style.width = `${Math.round(40 * scale)}px`;
        running = false
      }

      document.body.appendChild(img);
      fishCount++;
      
      const timeout = isMobile ? 5000 : 48000;
      setTimeout(() => {
        try {
          img.remove();
          fishCount--;
        } catch (e) {}
      }, timeout);
    }

    function scheduleNext() {
      if (!running) return;

      const r = Math.random();
      if (r < 0.25) {
        const count = 3 + Math.floor(Math.random() * 5); 
        const baseOffset = Math.floor(Math.random() * 30) * -1; 
        for (let i = 0; i < count; i++) {
          setTimeout(() => spawnFishInstance(i * 12 + baseOffset), i * 150 + Math.random() * 200);
        }
      } else {
        spawnFishInstance(0);
      }
      const next = 1000 + Math.random() * 3000;
      setTimeout(scheduleNext, next);
    }
    const startTimer = setTimeout(scheduleNext, 500);

    return () => {
      running = false;
      clearTimeout(startTimer);
    };
  }, []);

  return null;
}

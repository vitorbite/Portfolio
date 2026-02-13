"use client";
import { useEffect } from "react";
import Typed from "typed.js";
export default function Hero() {
  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: [
        "Desenvolvedor Fullstack",
        "Estudante de Java e Spring",
        "Criador de Projetos",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy();
  }, []);
  return (
    <>
      {" "}
      <span id="typed"></span>{" "}
    </>
  );
}

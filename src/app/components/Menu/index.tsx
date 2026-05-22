"use client"
import styles from "./style.module.css";
import {Scroll} from "./scroll";

export default function index() {
  return (
    <nav className="fixed top-0 z-50">
      <div className="min-w-screen h-15 border-b-amber-50 border-b bg-blue-950 flex justify-center items-center">
        <div className="flex justify-between max-w-1/2 w-2xl min-w-100 h-15 items-center">
        {/* <h2>Vitorbite</h2> */}
            <button className={styles.button} onClick={() => Scroll("Home")}>Home</button>
            <button className={styles.button} onClick={() => Scroll("Sobre")} id="SobreBtn">Sobre</button>
            <button className={styles.button} onClick={() => Scroll("Projetos")} id={styles.ProjetosBtn}>
              Projetos
            </button>
        </div>
      </div>
    </nav>
  );
}

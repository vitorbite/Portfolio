"use client";
import styles from "./style.module.css";
import { Scroll } from "./scroll";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function index() {
  const [menuIsOpen, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 z-10">
      <div className="max:w-20 w-screen h-15 border-b-amber-50 border-b bg-blue-950 flex sm:justify-evenly justify-between items-center px-10">
        <h2 className="cursor-pointer hover:brightness-50 font-bold text-indigo-200 transition-all"><a href="#Home">Vitorbite</a></h2>
        <div className="justify-between max-w-1/2 w-2xl items-center hidden sm:flex">
          <button className={styles.button} onClick={() => Scroll("Home")}>
            Home
          </button>
          <button className={styles.button} onClick={() => Scroll("Sobre")}>
            Sobre
          </button>
          <button className={styles.button} onClick={() => Scroll("Contato")}>
            Contate-me
          </button>
          <button
            className={styles.button}
            onClick={() => Scroll("Projetos")}
            id={styles.ProjetosBtn}
          >
            Projetos
          </button>
        </div>
        <button
          className={`${styles.MenuHamburger} sm:hidden`}
          onClick={() => {
            setMenu(!menuIsOpen);
          }}
          title="Menu"
        >
          <Menu></Menu>
        </button>
      </div>


      <div
        className={`${styles.MenuBtns} ${menuIsOpen ? styles.open : styles.closed} z-11 w-screen justify-center items-center`}
        id="MenuBtns"
      >
        <div className="flex flex-col justify-evenly text-xl ">
          <button
            className={""}
            onClick={() => {
              Scroll("Home");
              setMenu(false);
            }}
          >
            Home
          </button>

          <button
            className={""}
            onClick={() => {
              Scroll("Sobre");
              setMenu(false);
            }}
          >
            Sobre
          </button>

          <button
            className={""}
            onClick={() => {
              Scroll("Projetos");
              setMenu(false);
            }}
          >
            Projetos
          </button>

          <button
            className={""}
            onClick={() => {
              Scroll("Contato");
              setMenu(false);
            }}
          >
            Contate-me
          </button>
        </div>
      </div>
    </nav>
  );
}

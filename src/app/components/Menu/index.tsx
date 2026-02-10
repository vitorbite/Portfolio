import styles from "./style.module.css";

export default function index() {
  return (
    <div className="min-w-screen h-15 border-b-amber-50 border-b bg-blue-950 flex justify-center items-center">
      <div className="flex justify-between max-w-1/2 w-2xl min-w-100 h-15 items-center">
        <button className={styles.button}>Home</button>
        <button className={styles.button}>Sobre Mim</button>
        <button className={styles.button} id={styles.Projetos}>Projetos</button>
      </div>
    </div>
  );
}

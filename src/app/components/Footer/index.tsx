import style from "./style.module.css";

export default function index() {
  return (
    <div className="mt-45">
        <ol className="flex flex-row justify-center items-center h-12">
          <li className="p-2">
            <a
              className="text-shadow-black text-shadow-md hover:text-neutral-400 hover:underline"
              href="https://github.com/vitorbite"
            >
              GitHub
            </a>
          </li>
          <li className="p-2">
            <a
              className="text-shadow-black text-shadow-md hover:text-neutral-400 hover:underline"
              href="https://www.linkedin.com/in/vitor-bitencourt-de-andrade/"
            >
              LinkedIn
            </a>
          </li>
          <li className="p-2">
            <a
              className="text-shadow-black text-shadow-md hover:text-neutral-400 hover:underline"
              href="#"
            >
              email@gmail.com
            </a>
          </li>
        </ol>
      <footer className="w-screen h-10" id={style.footer}>
      </footer>
    </div>
  );
}

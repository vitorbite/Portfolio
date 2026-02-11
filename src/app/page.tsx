import Image from "next/image";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Container from "./components/Container";
import Img from "./imgs/Foto1.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen items-center justify-center font-sans overflow-x-hidden bg-primary-blue">
      <Menu />
      <main className="flex min-h-screen max-w-11/12 min-w-5xl flex-col items-center justify-between py-16 px-16 bg-tertiary-blue">
        <Container>
          <div className="flex flex-col">
            <span className="max-w-xs text-xl">Oi, me chamo</span>
            <h1 className="max-w-xs text-3xl font-semibold leading-10 text-blue-700 text-shadow-black text-shadow-md">
              Vítor Bitencourt de Andrade
            </h1>
            
            <h2 className="max-w-md text-4xl leading-8 font-extrabold text-shadow-black text-shadow-md">
              Developer
            </h2>
          </div>
          <img className="w-60" src={Img.src} alt="Foto de Perfil" />
        </Container>
        <Container>
          <div>
            <img src="#" alt="#" />
          </div>
          <div className="mx-30 flex flex-col items-center gap-6 text-center">
            <h3 className="text-xl">Coisas que gosto de fazer</h3>
            <ul>
              <li>Programar</li>
              <li>Jogar</li>
              <li>Ouvir Música</li>
            </ul>
          </div>
        </Container>
        <Footer />
      </main>
    </div>
  );
}

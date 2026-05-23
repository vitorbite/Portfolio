"use client"

import Particles from "./components/Particles";
import TiltedCard from "./components/TiltedCard";
import Container from "./components/Container";
import Menu from "./components/Menu";
import FishSpawner from "./components/FishSpawner";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Img from "./imgs/Foto1.png";
import Sobre from "./components/Sobre";
import ProjetosContainer from "./components/ProjetoContainer";
import Contato from "./components/Contato/Formulario";
import { Scroll } from "./components/Menu/scroll";

export default function Home() {
  return (
    <Particles>
        <FishSpawner />
      <div
        id="Home"
        className="flex flex-col min-h-screen w-screen items-center justify-center font-sans overflow-x-hidden"
      >
        <Menu />
        <main className="flex min-h-screen max-w-11/12 min-w-5xl flex-col items-center justify-between py-16 px-16 bg-tertiary-blue rounded-b-3xl border-2 border-t-0 border-blue-950 overflow-x-hidden">
          {/* Inicio */}
          <Container>
            <div className="flex flex-row justify-center">
              <div className="flex flex-col max-w-3xl sm:w-55 md:w-md justify-center">
                <span className="max-w-xs text-xl">Olá, me chamo</span>
                <h1 className="max-w-xs text-2xl font-semibold leading-10 text-yellow-400 text-shadow-black text-shadow-md ">
                  Vítor Bitencourt de Andrade
                </h1>
                <h2 className="max-w-md text-2xl leading-8 font-extrabold text-shadow-black text-shadow-md">
                  <Hero></Hero>
                </h2>
              <button className="bg-blue-600 sm:mt-5 sm:w-sm mt-4 sm:max-w-50 rounded-xl py-3 shadow-md shadow-gray-900 active:bg-blue-800 active:shadow-inner hover:bg-blue-700" onClick={() => Scroll("Contato")}>Contate-me</button>
              </div>
              <img
                className="size-31 drop-shadow-lg drop-shadow-neutral-900 sm:size-31 md:size-56 border-l-2"
                src={Img.src}
                alt="Foto de Perfil"
              />
            </div>
          </Container>
          {/* Sobre mim */}
          <Container>
            <Sobre />
          </Container>
          {/* Tecnologias */}
          <Container>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl">🌐 Front-end</h1>
              <Card>
                HTML & CSS para estruturar e estilizar páginas web. Domino
                semântica, boas práticas e consigo criar layouts responsivos e
                acessíveis.
              </Card>
              <Card>
                JavaScript (JS) Linguagem que dá vida às páginas. Sei manipular
                o DOM, trabalhar com eventos e criar interatividade na página
                web.
              </Card>

              <div className="flex">
                <TiltedCard
                  imageSrc="html5-original.svg"
                  altText="HTML5"
                  captionText="HTML5"
                ></TiltedCard>

                <TiltedCard
                  imageSrc="css.svg"
                  altText="CSS"
                  captionText="CSS"
                ></TiltedCard>

                <TiltedCard
                  imageSrc="js.png"
                  altText="JavaScript"
                  captionText="JavaScript"
                />
              </div>
              <Card>
                React Biblioteca moderna para construção de interfaces. Entendo
                sobre componentes, props, estado e hooks, criando aplicações
                dinâmicas e escaláveis.
              </Card>
              <Card>
                TypeScript Tipagem estática que traz segurança e clareza ao
                código. Utilizando para evitar erros e melhorar a manutenção dos
                projetos.
              </Card>
              <Card>
                TailwindCSS Framework utilitário que acelera o desenvolvimento
                de interfaces modernas e responsivas. Sei aplicar classes para
                criar designs consistentes e elegantes.
              </Card>
              <Card>
                Figma (básico) Ferramenta de design que usada para prototipar
                interfaces e transformar ideias visuais em projetos práticos.
              </Card>
              <div className="flex">
                <TiltedCard
                  imageSrc="typescript-original.svg"
                  altText="Typescript"
                  captionText="Typescript"
                />
                <TiltedCard
                  imageSrc="react-original.svg"
                  altText="React"
                  captionText="React"
                />
                <TiltedCard
                  imageSrc="tailwindcss.png"
                  altText="Tailwindcss"
                  captionText="Tailwindcss"
                />
                <TiltedCard
                  imageSrc="Figma.svg"
                  altText="Figma"
                  captionText="Figma"
                />
              </div>
            </div>
          </Container>
          <Container>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl">⚙️ Back-end</h1>
              <Card>
                Java Linguagem robusta e versátil. Tenho experiência em projetos
                básicos e estou futuramente expandindo para frameworks como
                Spring Boot.
              </Card>
              <Card>
                Spring (futuro aprendizado) Framework poderoso para
                desenvolvimento de APIs e sistemas empresariais. Pretendo
                aprofundar-me para criar aplicações escaláveis e seguras.
              </Card>
              <Card>
                MySQL Banco de dados relacional. Entendo conceitos de tabelas,
                consultas SQL e integração com aplicações.
              </Card>
              <div className="flex">
                <TiltedCard
                  imageSrc="java-original.svg"
                  altText="Java"
                  captionText="Java"
                />
              </div>
            </div>
          </Container>
          <Container>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl">🖥️ Outros conhecimentos</h1>
              <Card>
                C (básico) Linguagem de baixo nível que me deu fundamentos
                importantes sobre lógica de programação.
              </Card>
              <Card>
                Python (básico) Linguagem versátil, usada em automação, análise
                de dados e inteligência artificial.
              </Card>
            </div>
            <div className="flex">
              <TiltedCard
                imageSrc="python.svg"
                altText="Python"
                captionText="Python"
              />
              <TiltedCard
                imageSrc="c-original.svg"
                altText="Linguagem C"
                captionText="Linguagem C"
              />
            </div>
          </Container>
          {/* Projetos */}
          <Container>
            <div
              id="Projetos"
              className="w-full flex flex-col items-center justify-center gap-4"
            >
              <h1 className="text-2xl bg-neutral-900 p-2">Projetos</h1>
              <div className="w-full">
                <ProjetosContainer></ProjetosContainer>
              </div>
            </div>
          </Container>
          <Container>
            <Contato></Contato>
          </Container>
        </main>
        <div className="w-full flex flex-col items-center justify-center">
          <img src="Baleia.png" width={450} alt="Baleia" />
          <div className="flex justify-around items-end w-full relative top-20 mt-20">
            <img src="Algas.png" className="z-0" width={150} alt="" />
            <img src="Algas.png" className="z-0" width={150} alt="" />
            <img
              src="Algas.png"
              className="z-0 relative right-20"
              width={150}
              alt=""
            />
            <img src="Algas.png" className="z-0" width={150} alt="" />
            <img src="Algas.png" className="z-0" width={150} alt="" />
            <img src="Algas.png" className="z-0" width={150} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </Particles>
  );
}

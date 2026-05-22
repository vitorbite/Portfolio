import Particles from "./components/Particles";
import TiltedCard from "./components/TiltedCard";
import Container from "./components/Container";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Img from "./imgs/Foto1.png";
import Sobre from "./components/Sobre";
import ProjetosContainer from "./components/ProjetoContainer";
import Contato from "./components/Contato/Formulario"

export default function Home() {
  return (
    <Particles>
      <div
        id="Home"
        className="flex flex-col min-h-screen w-screen items-center justify-center font-sans overflow-x-hidden"
      >
        <Menu />
        <main className="flex min-h-screen max-w-11/12 min-w-5xl flex-col items-center justify-between py-16 px-16 bg-tertiary-blue rounded-b-3xl border-2 border-t-0 border-blue-950">
          {/* Inicio */}
          <Container>
            <div className="flex flex-row justixfy-center">
              <div className="flex flex-col max-w-3xl sm:w-md justify-center">
                <span className="max-w-xs text-xl">Olá, me chamo</span>
                <h1 className="max-w-xs text-3xl font-semibold leading-10 text-blue-700 text-shadow-black text-shadow-md ">
                  Vítor Bitencourt de Andrade
                </h1>
                <h2 className="max-w-md text-2xl leading-8 font-extrabold text-shadow-black text-shadow-md">
                  <Hero></Hero>
                </h2>
              </div>
              <img
                className=": size-31 drop-shadow-lg drop-shadow-neutral-900 sm:size-62 border-l-2"
                src={Img.src}
                alt="Foto de Perfil"
              />
            </div>
          </Container>
          {/* Sobre mim */}
          <Container>
            <Sobre/>
          </Container>
          {/* Tecnologias */}
          <Container>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl">🌐 Front-end</h1>
              <Card>
                HTML & CSS para estruturar e estilizar páginas web.
                Domino semântica, boas práticas e consigo criar layouts
                responsivos e acessíveis.
              </Card>
              <Card>
                JavaScript (JS) Linguagem que dá vida às páginas. Sei
                manipular o DOM, trabalhar com eventos e criar interatividade na página web.
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
                React Biblioteca moderna para construção de interfaces. Entendo sobre
                componentes, props, estado e hooks, criando aplicações
                dinâmicas e escaláveis.
              </Card>
              <Card>
                TypeScript Tipagem estática que traz segurança e clareza ao
                código. Utilizando para evitar erros e melhorar a manutenção
                dos projetos.
              </Card>
              <Card>
                TailwindCSS Framework utilitário que acelera o desenvolvimento
                de interfaces modernas e responsivas. Sei aplicar classes
                para criar designs consistentes e elegantes.
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
                Java Linguagem robusta e versátil. Tenho experiência em
                projetos básicos e estou futuramente expandindo para frameworks como Spring
                Boot.
              </Card>
              <Card>
                Spring (futuro aprendizado) Framework poderoso para
                desenvolvimento de APIs e sistemas empresariais. Pretendo
                aprofundar-me para criar aplicações escaláveis e seguras.
              </Card>
              <Card>
                MySQL Banco de dados relacional. Entendo conceitos de
                tabelas, consultas SQL e integração com aplicações.
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
            <div id="Projetos" className="w-full flex flex-col items-center justify-center gap-4">
              <h1 className="text-2xl bg-neutral-900 p-2">
                Projetos
              </h1>
              <div className="w-full">
                <ProjetosContainer></ProjetosContainer>
              </div>
            </div>
          </Container>
          <Container>
            <Contato></Contato>
          </Container>
        </main>
        <Footer />
      </div>
    </Particles>
  );
}

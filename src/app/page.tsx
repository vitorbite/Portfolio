import Particles from "./components/Particles";
import TiltedCard from "./components/TiltedCard";
import Container from "./components/Container";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Img from "./imgs/Foto1.png";
import GatoImg from "./imgs/GatoChad.png";

export default function Home() {
  return (
    <Particles>
      <div className="flex flex-col min-h-screen w-screen items-center justify-center font-sans overflow-x-hidden">
        <Menu />
        <main className="flex min-h-screen max-w-11/12 min-w-5xl flex-col items-center justify-between py-16 px-16 bg-tertiary-blue rounded-b-3xl border-2 border-t-0 border-blue-950">
          <Container>
            <div className="flex flex-row justixfy-center">
              <div className="flex flex-col max-w-3xl sm:w-md justify-center">
                <span className="max-w-xs text-xl">Olá, me chamo</span>
                <h1 className="max-w-xs text-3xl font-semibold leading-10 text-blue-700 text-shadow-black text-shadow-md ">
                  Vítor Bitencourt de Andrade
                </h1>
                <h2 className="max-w-md text-2xl leading-8 font-extrabold text-shadow-black text-shadow-md">
                  {/* <Hero></Hero> */}
                </h2>
              </div>
              <img
                className=": size-31 drop-shadow-lg drop-shadow-neutral-900 sm:size-62 border-l-2"
                src={Img.src}
                alt="Foto de Perfil"
              />
            </div>
          </Container>
          <Container>
            <div className="flex flex-row">
              <Card>
                <img src={GatoImg.src} alt="#" className="w-80" />
              </Card>
              <div className="mx-30 flex flex-col items-center gap-6 text-center border-l-2 border-amber-50 p-4">
                <h3 className="text-xl">Coisas que gosto de fazer</h3>
                <ul>
                  <li>Programar</li>
                  <li>Jogar</li>
                  <li>Ouvir Música</li>
                </ul>
              </div>
            </div>
          </Container>
          <Container>
            <div className="flex flex-col gap-5 bg-red-500">
              <h1 className="text-2xl">🌐 Front-end</h1>
              <Card>
                HTML & CSS Base sólida para estruturar e estilizar páginas web.
                Você domina semântica, boas práticas e consegue criar layouts
                responsivos e acessíveis.
              </Card>
              <Card>
                JavaScript (JS) Linguagem que dá vida às páginas. Você sabe
                manipular o DOM, trabalhar com eventos e criar interatividade.
              </Card>

              <div className="flex bg-neutral-900">
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
                React Biblioteca moderna para construção de interfaces. Você
                entende componentes, props, estado e hooks, criando aplicações
                dinâmicas e escaláveis.
              </Card>
              <Card>
                TypeScript Tipagem estática que traz segurança e clareza ao
                código. Você utiliza para evitar erros e melhorar a manutenção
                dos projetos.
              </Card>
              <Card>
                TailwindCSS Framework utilitário que acelera o desenvolvimento
                de interfaces modernas e responsivas. Você sabe aplicar classes
                para criar designs consistentes e elegantes.
              </Card>
              <Card>
                Figma (básico) Ferramenta de design que você usa para prototipar
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
                Java Linguagem robusta e versátil. Você já tem experiência em
                projetos básicos e está expandindo para frameworks como Spring
                Boot.
              </Card>
              <Card>
                Spring (futuro aprendizado) Framework poderoso para
                desenvolvimento de APIs e sistemas empresariais. Você pretende
                aprofundar-se para criar aplicações escaláveis e seguras.
              </Card>
              <Card>
                MySQL Banco de dados relacional. Você entende conceitos de
                tabelas, consultas SQL e integração com aplicações.
              </Card>
              <div className="flex">
                <TiltedCard
                  imageSrc="java-original.svg"
                  altText="Java"
                  captionText="Java"
                />
                {/* <TiltedCard
                  imageSrc="Figma.svg"
                  altText="Figma"
                  captionText="Figma"
                    
                />
                <TiltedCard
                  imageSrc="Figma.svg"
                  altText="Figma"
                  captionText="Figma"
                    
                /> */}
              </div>
            </div>
          </Container>
          <Container>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl">🖥️ Outros conhecimentos</h1>
              <Card>
                C (básico) Linguagem de baixo nível que te deu fundamentos
                importantes sobre lógica e memória.
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

          <Container>
            <h1 className="text-2xl bg-neutral-900 p-2">Projetos</h1>
            <div className="flex content-around sm:flex-col">
              {/* <TiltedCard />
              <TiltedCard />
              <TiltedCard /> */}
            </div>
          </Container>
          <Container>
            <h1>Entre em Contato</h1>
            <form action="send" method="POST" className="flex flex-col">
              <label htmlFor="nome">nome:</label>
              <input id="nome" type="text" className="bg-white" />
              <label htmlFor="email">email:</label>
              <input
                type="email"
                name="emailInput"
                id="email"
                className="bg-white"
              />
              <button type="submit">Enviar</button>
            </form>
          </Container>
        </main>
        <Footer />
      </div>
    </Particles>
  );
}

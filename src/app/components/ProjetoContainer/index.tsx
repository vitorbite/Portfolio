export default function ProjetoContainer() {
  return (
    <div className="w-full flex flex-col justify-around items-center sm:flex-row">
      <div className="Projeto">
        <h2 className="bg-blue-400 w-full p-2">Gatonautas</h2>
        <div className="flex justify-center flex-col items-center">
          <p>Projeto com responsividade e 
            aplicações de APIs para consumo</p>
          <img src="Projeto1.png" alt="" />
          <a href="https://github.com/vitorbite/gatonautas-web">/Gatonautas-web</a>
        </div>
      </div>
      <div className="Projeto">
        <h2  className="bg-blue-400 w-full p-2">Escalonador </h2>
        <div className="flex justify-center flex-col items-center mb-24">
          <p>Trabalho de Estruturas de Dados com Lista encadeadas em Java
             para criar um Escalonador de Processos</p>
          <a href="https://github.com/vitorbite/Escalonador-de-Processos">/Escalonador de Processos</a>
        </div>
      </div>
      <div className="Projeto">
        <h2 className="bg-blue-400 w-full p-2">Jogo da Velha</h2>
        <div className="flex justify-center flex-col items-center">
          <p>Um jogo da velha totalmente funcional com animações feitas em CSS</p>
          <img src="Projeto3.png" alt="Jogo da Velha" />
          <a href="https://vitorbite.github.io/Projetos/TicTacToe/TicTacToe.html">/Jogo da Velha</a>
        </div>
      </div>
    </div>
  );
}

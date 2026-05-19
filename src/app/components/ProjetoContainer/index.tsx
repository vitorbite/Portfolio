export default function ProjetoContainer() {
  return (
    <div className="w-full flex flex-col justify-around items-center sm:flex-row">
      <div className="Projeto">
        <h2>Projeto 1</h2>
        <div className="flex justify-center flex-col items-center">
          <p>Inovando a cada dia</p>
          <img src="#" alt="Imagem" />
          <a href="#">link do repositório</a>
        </div>
      </div>
      <div className="Projeto">
        <h2>Projeto 2</h2>
        <div className="flex justify-center flex-col items-center">
          <p>Inovando a cada dia</p>
          <img src="#" alt="Imagem" />
          <a href="#">link do repositório</a>
        </div>
      </div>
      <div className="Projeto">
        <h2>Projeto 3</h2>
        <div className="flex justify-center flex-col items-center">
          <p>Inovando a cada dia</p>
          <img src="#" alt="Imagem" />
          <a href="#">link do repositório</a>
        </div>
      </div>
    </div>
  );
}

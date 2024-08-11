import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="py-3 px-4 text-center space-y-4 border-t border-stone-300">
      <div className="flex items-center justify-between space-x-7">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Lucas Winicius</h1>
          <p className="text-sm">Sempre criando e desenvolvendo com amor e empenho.</p>
        </div>
        <ul className="flex space-x-3 text-sm font-semibold items-center ">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Artigos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Seja um contribuidor</a>
          </li>
          <li>
            <a href="#">Ajude o projeto</a>
          </li>
        </ul>
      </div>

      <Separator />

      <div>
        <p className="font-bold text-lg">
          Criado e mantido por Lucas - &copy; 2024 Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

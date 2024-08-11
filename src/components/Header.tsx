import { Github, Linkedin, User } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Header() {
  return (
    <header className="flex justify-between py-2 px-4 border-b border-stone-300">
      <h1 className="text-3xl font-bold">Blog</h1>

      <ul className="flex flex-row justify-between space-x-4 items-center font-semibold">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Artigos</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
      </ul>

      <div className="flex justify-between items-center space-x-4">
        <a href="#">
          <Github size={20} />
        </a>
        <a href="#">
          <Linkedin size={20} />
        </a>
        <Separator orientation="vertical" />
        <button className="flex space-x-2 items-center">
          <User size={20} />
          <p className="text-sm font-medium">Sign in</p>
        </button>
      </div>
    </header>
  );
}

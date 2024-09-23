import { Github, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";
import UserHeader from "./User.header";
import Menu from "./Menu.header";

export default function Header() {
  return (
    <header className="flex justify-between  py-2 px-4 border-b border-stone-300">
      <h1 className="text-3xl font-bold">Blog</h1>

      <ul className="hidden sm:flex flex-row justify-between space-x-4 items-center font-semibold">
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/profile/me">Perfil</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
      </ul>

      <div className="hidden sm:flex justify-between items-center space-x-4">
        <a href="https://github.com/Lucas-Winicius" target="_blank">
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-winicius-souza/"
          target="_blank"
        >
          <Linkedin size={20} />
        </a>
        <Separator
          orientation="vertical"
          className="border-r border-neutral-400"
        />
        <UserHeader />
      </div>

      <Menu/>
    </header>
  );
}

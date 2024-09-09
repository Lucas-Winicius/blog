import { Github, Home, Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-10 my-5 mx-8">
      <div className="flex flex-col items-center font-bold text-lg">
        <img
          src="/me.jpg"
          alt="Foto do criador do blog"
          className="rounded-full w-44 h-44 object-cover"
        />

        <p>Lucas Winicius</p>
        <p>Desenvolvedor Full-Stack</p>
      </div>
      <div className="bg-zinc-100 rounded py-4 px-8 space-y-5">
        <h1 className="font-bold text-3xl">Sobre Mim</h1>
        <p className="text-xl font-medium">
          Olá, sou Lucas Winicius e sou o criador do código-fonte deste blog.
          Sou desenvolvedor full-stack e estudo na área há cerca de 4 anos.
          Durante a pandemia, descobri minha profissão dos sonhos. Minha
          linguagem de programação principal é o TypeScript, mas também tenho
          conhecimentos em Python.
        </p>
      </div>
      <div className="bg-zinc-100 rounded py-4 px-8 space-y-5">
        <h1 className="font-bold text-3xl">Sobre o blog</h1>
        <p className="text-xl font-medium">
          Criei este blog com o objetivo de facilitar o acesso a conteúdos
          gerais e, principalmente, ajudar aqueles que gostariam de ter um blog
          ou portal de notícias, mas não têm o conhecimento necessário para
          construí-lo. Minha intenção é oferecer uma alternativa ao popular
          Blogger. Além disso, ao desenvolver este projeto, adquiri muito
          conhecimento.
        </p>
      </div>

      <div className="flex gap-7 justify-center bg-zinc-100 rounded py-4 px-8 w-full">
        <a href="/">
          <Home size={35} />
        </a>
        <a href="https://github.com/Lucas-Winicius" target="_blank">
          <Github size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-winicius-souza/"
          target="_blank"
        >
          <Linkedin size={35} />
        </a>
      </div>
    </div>
  );
}

import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 my-5 mx-8">
      <Separator className="border border-zinc-600" />
      <h1 className="text-3xl font-bold">Contribua com o Nosso Projeto</h1>
      <p className="font-medium text-lg">
        Nosso projeto é construído de forma colaborativa, e sua participação é
        fundamental para o sucesso contínuo. Se você deseja contribuir, pode
        acessar nosso repositório no GitHub, onde você encontrará informações
        sobre como enviar suas sugestões, melhorias ou correções de código.
      </p>
      <p className="font-medium text-lg">
        Atualmente, as contribuições monetárias estão temporariamente
        indisponíveis, mas estamos trabalhando para reativá-las em breve.
        Agradecemos sua compreensão e apoio! Qualquer ajuda na forma de código,
        documentação ou feedback é muito bem-vinda.
      </p>
      <ul className="self-start list-disc ml-4 font-semibold">
        <li>
          <a href="https://github.com/Lucas-Winicius/blog-api" target="_blank">
            Blog - API
          </a>
        </li>
        <li>
          <a href="https://github.com/Lucas-Winicius/blog" target="_blank">
            Blog - Frontend
          </a>
        </li>
      </ul>
      <Separator className="border border-zinc-600" />
    </div>
  );
}

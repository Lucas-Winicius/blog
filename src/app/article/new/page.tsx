import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 my-5 mx-8">
      <h1 className="font-bold text-2xl">Crie seu post</h1>
      <form className="flex flex-col gap-4">
        <div className="space-y-1">
          <Label htmlFor="image">Link da capa</Label>
          <Input id="image" placeholder="Capa do post" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="title">Título</Label>
          <Input id="title" placeholder="O meu melhor post" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="subtitle">Subtítulo</Label>
          <Input id="subtitle" placeholder="Com este post gostaria de..." />
        </div>
        <div className="space-y-1">
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" placeholder="o-meu-melhor-post" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="image">Conteudo (markdown)</Label>
          <textarea id="image" placeholder="Hoje, ..." className="p-2 rounded-md" />
        </div>
        <Button type="submit">Criar</Button>
      </form>
    </div>
  );
}

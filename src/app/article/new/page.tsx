"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "@/shared/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCookie } from "cookies-next";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const articleSchema = z.object({
  image: z.string().url("Insira uma url de imagem valida."),
  title: z
    .string()
    .min(5, "O título precisa ter ao menos 3 caracteres.")
    .max(200, "O título precisa ter menos que 200 caracteres."),
  subtitle: z
    .string()
    .min(10, "O subtítulo precisa ter ao menos 3 caracteres.")
    .max(600, "O subtitulo precisa ter menos que 600 caraceres."),
  slug: z
    .string()
    .min(5, "O slug precisa ter ao menos 3 caracteres.")
    .max(220, "O slug precisa ter menos que 220 caraceres.")
    .regex(/^[a-zA-Z0-9-]{1,}$/, "O slug pode conter apenas a-z, 0,9 e -."),
  content: z.string().min(10, "O conteúdo precisa ter ao menos 10 caracteres."),
});

type ArticleSchema = z.infer<typeof articleSchema>;

export default function About() {
  const userToken = getCookie("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleSchema>({
    resolver: zodResolver(articleSchema),
  });

  const handlePost = (data: ArticleSchema) => {
    axios
      .post("/posts", data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((data) => {
        if (data.status === 401)
          return toast(
            "Parece que você não está logado ou não pode criar artigos."
          );

        if (data.status !== 201) return toast("Ops, algo inesperado ocorreu.");

        toast(`Seu artigo "${data.data.title}" foi criado`);
      })
      .catch(() => {
        toast("Não conseguimos criar seu artigo");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 my-5 mx-8">
      <h1 className="font-bold text-2xl">Crie seu post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePost)}>
        <div className="space-y-1">
          <Label htmlFor="image">Link da capa</Label>
          <Input
            id="image"
            placeholder="Capa do post"
            className={errors.image && "border-2 border-red-600"}
            {...register("image")}
          />
          <p className="text-xs text-red-600 font-semibold my-2">
            {errors.image?.message}
          </p>
        </div>
        <div className="space-y-1">
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            placeholder="O meu melhor post"
            className={errors.title && "border-2 border-red-600"}
            {...register("title")}
          />
          <p className="text-xs text-red-600 font-semibold my-2">
            {errors.title?.message}
          </p>
        </div>
        <div className="space-y-1">
          <Label htmlFor="subtitle">Subtítulo</Label>
          <Input
            id="subtitle"
            placeholder="Com este post gostaria de..."
            className={errors.subtitle && "border-2 border-red-600"}
            {...register("subtitle")}
          />
          <p className="text-xs text-red-600 font-semibold my-2">
            {errors.subtitle?.message}
          </p>
        </div>
        <div className="space-y-1">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            placeholder="o-meu-melhor-post"
            className={errors.slug && "border-2 border-red-600"}
            {...register("slug")}
          />
          <p className="text-xs text-red-600 font-semibold my-2">
            {errors.slug?.message}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="content">Conteudo (markdown)</Label>
          <textarea
            id="content"
            placeholder="Hoje, ..."
            className={
              "p-2 rounded-md" +
              `${errors.content && " border-2 border-red-600"}`
            }
            {...register("content")}
          />
          <p className="text-xs text-red-600 font-semibold my-2">
            {errors.content?.message}
          </p>
        </div>
        <Button type="submit">Criar</Button>
      </form>
    </div>
  );
}

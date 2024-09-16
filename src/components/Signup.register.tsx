"use client";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { TabsContent } from "./ui/tabs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/shared/axios";
import { toast } from "sonner";

const createUserSchema = z
  .object({
    name: z
      .string()
      .min(3, "Seu nome precisa conter ao menos 3 caracteres.")
      .max(255, "Seu nome precisa conter menos que 255 caracteres."),

    username: z
      .string()
      .min(5, "Seu nome de usuário precisa conter ao menos 5 caracteres.")
      .max(255, "Seu nome de precisa conter menos que 255 caracteres.")
      .regex(
        /^[a-zA-Z0-9._-]{1,}$/,
        "Seu nome de usuário pode apenas conter apenas caracteres alfanuméricos ou ., _, -."
      )
      .regex(
        /^[^\W\d_].*/,
        "Seu nome de usuário não pode iniciar com simbolos."
      ),

    password: z
      .string()
      .min(8, "Sua senha precisa conter ao menos 8 caracteres."),
    passwordvalidate: z
      .string()
      .min(8, "Sua senha precisa conter ao menos 8 caracteres.")
      .max(255, "Sua senha precisa menos que 255 caracteres."),
  })
  .refine((data) => data.password === data.passwordvalidate, {
    message: "As senhas não são iguais.",
    path: ["passwordvalidate"],
  });

type CreateUserSchema = z.infer<typeof createUserSchema>;

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const handleCreateUser = (data: CreateUserSchema) => {
    axios
      .post("/users", {
        name: data.name,
        username: data.username,
        password: data.password,
      })
      .then((data) => {
        if (data.status !== 201)
          return toast("Verifique suas informações e tente novamente.");
        
        toast(`Seja, Bem-Vindo(a). Você já pode fazer login.`);
      })
      .catch(() => {
        toast("Não conseguimos realizar seu cadastro");
      });
  };

  return (
    <TabsContent value="create">
      <Card>
        <CardHeader>
          <CardTitle>Crie e aproveite!</CardTitle>
          <CardDescription>
            Com uma conta você não tera vantagens (por enquanto claro).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form
            onSubmit={handleSubmit(handleCreateUser)}
            className="flex flex-col gap-4"
          >
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Adalberto Junior"
                className={errors.name && "border border-red-600"}
                {...register("name")}
              />
              <p className="text-xs text-red-600 font-semibold my-2">
                {errors.name?.message}
              </p>
            </div>
            <div>
              <Label htmlFor="username">Nome de usuário</Label>
              <Input
                id="username"
                placeholder="a.juninho123"
                className={errors.username && "border border-red-600"}
                {...register("username")}
              />
              <p className="text-xs text-red-600 font-semibold my-2">
                {errors.username?.message}
              </p>
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                className={errors.password && "border border-red-600"}
                {...register("password")}
              />
              <p className="text-xs text-red-600 font-semibold my-2">
                {errors.password?.message}
              </p>
            </div>
            <div>
              <Label htmlFor="passwordvalidate">Sabe mesmo sua senha?</Label>
              <Input
                id="passwordvalidate"
                type="password"
                placeholder="********"
                className={errors.passwordvalidate && "border border-red-600"}
                {...register("passwordvalidate")}
              />
              <p className="text-xs text-red-600 font-semibold my-2">
                {errors.passwordvalidate?.message}
              </p>
            </div>

            <Button type="submit">Criar</Button>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

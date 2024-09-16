"use client";
import { z } from "zod";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/shared/axios";
import { toast } from "sonner";
import { setCookie } from "cookies-next";
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
  username: z
    .string()
    .min(5, "Ops, verifique seu nome de usuário e tente novamente.")
    .max(255, "Ops, verifique seu nome de usuário e tente novamente.")
    .regex(
      /^[a-zA-Z0-9._-]{1,}$/,
      "Ops, verifique seu nome de usuário e tente novamente."
    )
    .regex(
      /^[^\W\d_].*/,
      "Ops, verifique seu nome de usuário e tente novamente."
    ),

  password: z
    .string()
    .min(8, "Algo está errado com sua senha tente novamente.")
    .max(255, "Algo está errado com sua senha tente novamente."),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Signup() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (data: LoginSchema) => {
    axios
      .post("/signin", {
        username: data.username,
        password: data.password,
      })
      .then((data) => {
        console.log(data);
        if (data.status !== 200)
          return toast("Verifique suas informações e tente novamente.");

        setCookie("token", data.data.token, {
          path: "/",
          maxAge: 30 * 24 * 60 * 60,
        });

        toast(`Seja, Bem-Vindo(a). Você será redirecionado(a) ao início.`, {
          onAutoClose: () => router.push('/')
        });
      })
      .catch(() => {
        toast("Não conseguimos realizar seu cadastro");
      });
  };
  return (
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Seja Bem-Vindo(a), unknown!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="space-y-1">
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
            <div className="space-y-1">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="*********"
                className={errors.password && "border border-red-600"}
                {...register("password")}
              />
              <p className="text-xs text-red-600 font-semibold my-2">
                {errors.password?.message}
              </p>
            </div>
            <Button type="submit" variant="default">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

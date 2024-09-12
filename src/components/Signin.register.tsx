"use client";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { TabsContent } from "./ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(5, "Ops, verifique seu nome de usuário e tente novamente.")
    .max(255, "Ops, verifique seu nome de usuário e tente novamente.")
    .regex(
      /^[a-zA-Z0-9._-]{1,}$/,
      "Ops, verifique seu nome de usuário e tente novamente."
    )
    .regex(/^[^\W\d_].*/, "Ops, verifique seu nome de usuário e tente novamente."),

  password: z
    .string()
    .min(8, "Algo está errado com sua senha tente novamente.")
    .max(255, "Algo está errado com sua senha tente novamente."),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (data: LoginSchema) => {
    console.log(data);
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

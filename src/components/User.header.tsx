"use client";
import { LogOut, User } from "lucide-react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function UserHeader() {
  const userToken = getCookie("token");
  const router = useRouter();

  const logOut = () => {
    setCookie("token", "", { path: "/" });
    router.refresh();
  };

  const goToRegister = () => {
    router.push("/register");
  };

  if (!userToken)
    return (
      <Button
        variant="ghost"
        className="flex space-x-2 items-center"
        onClick={goToRegister}
      >
        <User size={20} />
        <p className="text-sm font-medium">Entrar</p>
      </Button>
    );

  return (
    <Button
      variant="ghost"
      className="flex gap-2 items-center"
      onClick={logOut}
    >
      <LogOut size={20} />
      <p className="text-sm font-medium">Sair</p>
    </Button>
  );
}

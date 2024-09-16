"use client";
import { LogOut, User } from "lucide-react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from 'next/navigation'

export default function UserHeader() {
  const userToken = getCookie("token");
  const router = useRouter()

  const logOut = () => {
    setCookie("token", "", { path: "/" });
    router.refresh()
  };

  if (!userToken)
    return (
      <a href="/register" className="flex space-x-2 items-center">
        <User size={20} />
        <p className="text-sm font-medium">Entrar</p>
      </a>
    );

  return (
    <button className="flex gap-2 items-center" onClick={logOut}>
      <LogOut size={20} />
      <p className="text-sm font-medium">Sair</p>
    </button>
  );
}

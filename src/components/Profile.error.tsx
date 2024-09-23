import time from "@/shared/time";
import { UserRoundX } from "lucide-react";

export default function ProfileError() {
  return (
    <div className="flex md:flex-row flex-col md:items-start items-center gap-5 m-5 h-screen md:h-fit">
      <div className="flex flex-col gap-4 items-center space-x-4 md:h-screen bg-slate-50 py-9 px-7 rounded-md w-full min-w-80 md:max-w-96">
        <div className="md:block hidden p-3 rounded-full">
          <UserRoundX size={150} strokeWidth={1} color="red" />
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-3xl font-bold">Oops, Algo não parece certo.</p>
          <p>Tente novamente em instantes.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-6 h-fit">
        <div className="flex flex-col space-x-3 rounded-lg bg-stone-50 w-80 overflow-hidden hover:scale-95 delay-100 duration-200">
          <a
            href="/"
            className="h-full space-y-2 py-2 px-4 flex flex-col justify-around "
          >
            <h1 className="font-bold text-lg">
              O que faço quando o usuário não carrega?
            </h1>
            <p className="w-fit flex-grow">
              Embora pouco comum, as vezes nos deparamos com usuários que não
              carregam, isso pode ser causado por erros na api ou inexistência
              do usuário, aqui você entenderá o que deve fazer.{" "}
              <span className="font-bold">Clique e descubra.</span>
            </p>

            <p className="text-right text-xs font-bold py-1">
              {time(new Date())}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

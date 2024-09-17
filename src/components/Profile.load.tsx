import { UserRound } from "lucide-react";

export default function ProfileLoad() {
  return (
    <div className="flex flex-row gap-5 m-5 cursor-default">
      <div className="flex flex-col gap-4 items-center space-x-4 h-screen bg-slate-50 py-9 px-7 rounded-md min-w-80 max-w-96">
        <div className="bg-stone-300 p-3 rounded-full border border-neutral-400 animate-bounce">
          <UserRound size={120} strokeWidth={1} />
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-3xl text-transparent bg-slate-300 rounded animate-pulse w-fit">
            Lucas Winicius
          </p>
          <p className="text-sm text-transparent bg-slate-300 rounded animate-pulse w-fit">
            @luc.winicius
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-6 h-fit">
        <div className="flex flex-col space-x-3 rounded-lg bg-stone-50 w-80 overflow-hidden">
          <div className="h-72 bg-zinc-400 animate-pulse"></div>

          <div className="h-full space-y-1 py-2 px-4 flex flex-col justify-around">
            <h1 className="text-transparent bg-slate-300 rounded animate-pulse w-fit text-lg">
              Lorem Title of my post
            </h1>
            <p className="text-transparent bg-slate-300 rounded animate-pulse w-fit">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-transparent bg-slate-300 rounded animate-pulse w-fit">
              Lorem ipsum dolor sit amet lorem 
            </p>
            <p className="text-transparent bg-slate-300 rounded animate-pulse w-fit">
              Lorem ipsum dolor sit amet ipsin
            </p>
            <div className="flex justify-end">
              <p className="text-right text-xs text-transparent bg-slate-300 rounded animate-pulse w-fit">
                16 de set de 2024 às 21:53
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

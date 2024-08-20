import Article from "@/components/Article";
import { UserRound } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex flex-row gap-5 m-5">
      <div className="flex flex-col gap-4 items-center space-x-4 h-screen bg-slate-50 py-9 px-7 rounded-md min-w-fit">
        <div className="bg-stone-300 p-3 rounded-full border border-neutral-400">
          <UserRound size={150} strokeWidth={1} />
        </div>
        <div>
          <p className="font-bold text-3xl">Lucas Winicius</p>
          <p className="text-sm text-center font-medium">@lucas.winicius</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-6 h-fit">
        <Article />
      </div>
    </div>
  );
}

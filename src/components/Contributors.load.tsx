import { UserRound } from "lucide-react";

export default function ContributorsLoad() {
  return (
    <aside className="bg-zinc-100 px-4 py-6 space-y-5 rounded-lg w-72 cursor-default">
      <div className="font-bold text-lg text-transparent bg-stone-300 w-fit rounded animate-pulse">Contribuidores</div>

      <div className="flex flex-col gap-4 animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="bg-stone-300 p-2 rounded-full">
              <UserRound size={30} strokeWidth={1} color="transparent" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-transparent w-fit bg-stone-300 rounded">Lorem Text</div>
              <div className="text-transparent w-fit bg-stone-300 rounded">@loremipsum</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-stone-300 p-2 rounded-full">
              <UserRound size={30} strokeWidth={1} color="transparent" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-transparent w-fit bg-stone-300 rounded">Lorem text size 2</div>
              <div className="text-transparent w-fit bg-stone-300 rounded">@ramdomlorem</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-stone-300 p-2 rounded-full">
              <UserRound size={30} strokeWidth={1} color="transparent" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-transparent w-fit bg-stone-300 rounded">Big Lorem Text</div>
              <div className="text-transparent w-fit bg-stone-300 rounded">@loremlorem</div>
            </div>
          </div>
      </div>
    </aside>
  );
}

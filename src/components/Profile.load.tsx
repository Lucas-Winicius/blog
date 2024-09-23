import { UserRound } from "lucide-react";
import ArticleLoad from "./Article.load";

export default function ProfileLoad() {
  return (
    <div className="flex md:flex-row flex-col md:items-start items-center gap-5 m-5 cursor-default">
      <div className="flex flex-col gap-4 items-center space-x-4 md:h-screen bg-slate-50 py-9 px-7 rounded-md w-full min-w-80 md:max-w-96">
        <div className="md:block hidden bg-stone-300 p-3 rounded-full border border-neutral-400 animate-bounce">
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
        <ArticleLoad/>
        <ArticleLoad/>
        <ArticleLoad/>
      </div>
    </div>
  );
}

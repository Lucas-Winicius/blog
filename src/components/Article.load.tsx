export default function ArticleLoad() {
  return (
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
  );
}

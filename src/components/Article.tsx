import time from "@/shared/time";

type ArticleProps = {
  image: string;
  slug: string;
  title: string;
  subtitle: string;
  createdAt: string;
};

export default function Article(props: ArticleProps) {
  return (
    <a
      href={`/article/${props.slug}`}
      className="flex flex-col space-x-3 rounded-lg bg-stone-50 w-80 overflow-hidden hover:scale-95 delay-100 duration-200"
    >
      <img src={props.image} alt="" title={props.title} width={320} />

      <div className="h-full space-y-2 py-2 px-4 flex flex-col justify-around">
        <h1 className="font-bold text-lg">{props.title}</h1>
        <p className="w-fit flex-grow">{props.subtitle}</p>
        <p className="text-right text-xs font-bold py-1">
          {time(props.createdAt)}
        </p>
      </div>
    </a>
  );
}

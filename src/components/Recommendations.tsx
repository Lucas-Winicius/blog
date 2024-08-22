interface RecommendationsType {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  authorId: number;
  createdAt: string;
  updatedAt: string;
}

export default function Recommendations({
  recommendations,
}: {
  recommendations: RecommendationsType[];
}) {
  return (
    <aside className="bg-zinc-100 px-4 py-6 space-y-5 rounded-lg w-72">
      <h1 className="font-bold text-lg">Recomendados</h1>

      {recommendations.map((recommendation, id) => (
        <a
          href={`/article/${recommendation.slug}`}
          className="flex items-center space-x-5"
          key={recommendation.id}
        >
          <h1 className="text-neutral-500 font-medium text-5xl">{++id}</h1>
          <p className="text-sm font-semibold">{recommendation.title}</p>
        </a>
      ))}
    </aside>
  );
}

"use client";
import axios from "@/shared/axios";
import { useQuery } from "@tanstack/react-query";

type RecommendationsResponse = {
  title: string;
  slug: string;
}

export default function Recommendations() {
  const { isPending, isError, data: recommendations, error } = useQuery({
    queryKey: ["recommendations"],
    queryFn: () => axios.get<RecommendationsResponse[]>("/info/recommendations"),
  });

  if (isPending) return <div>Carregando Recomendações...</div>;

  return (
    <aside className="bg-zinc-100 px-4 py-6 space-y-5 rounded-lg w-72">
      <h1 className="font-bold text-lg">Recomendados</h1>

      {recommendations?.data.map((recommendation, id) => (
        <a
          href={`/article/${recommendation.slug}`}
          className="flex items-center space-x-5"
          key={recommendation.slug}
        >
          <h1 className="text-neutral-500 font-medium text-5xl">{++id}</h1>
          <p className="text-sm font-semibold">{recommendation.title}</p>
        </a>
      ))}
    </aside>
  );
}

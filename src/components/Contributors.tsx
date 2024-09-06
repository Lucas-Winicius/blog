"use client";
import axios from "@/shared/axios";
import { useQuery } from "@tanstack/react-query";
import { UserRound } from "lucide-react";

type ContributorsResponse = {
  name: string;
  username: string;
};
export default function Contributors() {
  const {
    isPending,
    isError,
    data: contributors,
    error,
  } = useQuery({
    queryKey: ["contributors"],
    queryFn: () => axios.get<ContributorsResponse[]>("/info/contributors"),
  });

  if (isPending) return <div>Carregando Contribuidores...</div>;

  return (
    <aside className="bg-zinc-100 px-4 py-6 space-y-5 rounded-lg w-72">
      <h1 className="font-bold text-lg">Contribuidores</h1>

      {contributors?.data.map((contributor) => (
        <a href={`/profile/${contributor.username}`} className="flex items-center space-x-4" key={contributor.username}>
          <div className="bg-stone-300 p-2 rounded-full border border-neutral-400">
            <UserRound size={30} strokeWidth={1} />
          </div>
          <div>
            <p className="font-bold">{contributor.name}</p>
            <p className="text-sm font-medium">{contributor.username}</p>
          </div>
        </a>
      ))}
    </aside>
  );
}

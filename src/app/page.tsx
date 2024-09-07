"use client";
import Article from "@/components/Article";
import Contributors from "@/components/Contributors";
import Recommendations from "@/components/Recommendations";
import Search from "@/components/Search";
import axios from "@/shared/axios";
import { useQuery } from "@tanstack/react-query";

type HomeResponse = {
  image: string;
  slug: string;
  title: string;
  subtitle: string;
  createdAt: string;
};

export default function Home() {
  const {
    isPending,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["home"],
    queryFn: () => axios.get<HomeResponse[]>("/"),
  });

  return (
    <div className="m-5 gap-5 flex">
      <aside className="flex flex-col gap-7">
        <Search />
        <Recommendations />
        <Contributors />
      </aside>
      <main className="w-max h-fit flex gap-3 justify-around flex-wrap ">
        {!isPending && posts?.data.map((post) => (
          <Article key={post.slug} {...post} />
        ))}
      </main>
    </div>
  );
}

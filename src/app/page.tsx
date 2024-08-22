"use client";
import Article from "@/components/Article";
import Contributors from "@/components/Contributors";
import Recommendations from "@/components/Recommendations";
import Search from "@/components/Search";
import axios from "@/shared/axios";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["home"],
    queryFn: () => axios.get("/"),
  });

  if (isPending) return <div className="h-screen"></div>

  return (
    <div className="m-5 gap-5 flex">
      <aside className="flex flex-col gap-7">
        <Search />
        <Recommendations recommendations={data?.data.recomended} />
        <Contributors />
      </aside>
      <main className="w-max h-fit flex gap-3 justify-around flex-wrap ">
        <Article/>
      </main>
    </div>
  );
}

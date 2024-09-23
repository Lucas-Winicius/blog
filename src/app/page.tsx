import Contributors from "@/components/Contributors";
import HomeArticles from "@/components/HomeArticles";
import Recommendations from "@/components/Recommendations";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="m-5 gap-5 flex">
      <aside className="md:flex hidden flex-col gap-7">
        <Search />
        <Recommendations />
        <Contributors />
      </aside>
      <main className="w-max h-fit flex gap-3 justify-around flex-wrap ">
        <HomeArticles />
      </main>
    </div>
  );
}

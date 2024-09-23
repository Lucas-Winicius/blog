"use client";
import { useSearchParams } from "next/navigation";
import axios from "@/shared/axios";
import { useQuery } from "@tanstack/react-query";
import Article from "./Article";
import ArticleLoad from "./Article.load";

type HomeResponse = {
  image: string;
  slug: string;
  title: string;
  subtitle: string;
  createdAt: string;
};

export default function HomeArticles() {
  const searchParams = useSearchParams();

  const {
    isPending,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["home"],
    queryFn: () => axios.get<HomeResponse[]>("/"),
  });

  if (isPending)
    return (
      <>
        <ArticleLoad />
        <ArticleLoad />
        <ArticleLoad />
      </>
    );

    
  return (
    !isPending &&
    posts?.data
      .filter((post) => {
        const searchTerm = searchParams.get("search") || "";
        return (
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.subtitle.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
      })
      .map((post) => <Article key={post.slug} {...post} />)
  );
}

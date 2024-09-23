"use client";
import Contributors from "@/components/Contributors";
import Recommendations from "@/components/Recommendations";

import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import axios from "@/shared/axios";
import time from "@/shared/time";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArticleResponse {
  post: Post;
  author: Author;
  previousSlug: string;
  nextSlug: string;
}

interface Post {
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

interface Author {
  id: number;
  name: string;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export default function Article({ params }: { params: { id: string } }) {
  const {
    isPending,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["home"],
    queryFn: () => axios.get<ArticleResponse>(`/posts?slug=${params.id}`),
  });

  return (
    <div className="m-5 gap-5 flex flex-row-reverse">
      <aside className="hidden md:flex flex-col gap-7">
        <Recommendations />
        <Search />
        <Contributors />
      </aside>
      {!isPending && (
        <main className="w-max flex-grow h-fit flex flex-col gap-5 justify-around mx-4">
          <h1 className="font-bold text-5xl">{post?.data.post.title}</h1>
          <h2 className="text-xl font-medium">{post?.data.post.subtitle}</h2>

          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: post?.data.post.content! }}
          />

          <div className="flex xl:flex-row flex-col gap-6 items-center justify-between">
            <div>
              <p className="font-bold">
                Por: {post?.data.author.name} -{" "}
                {time(post?.data.post.createdAt!)}
              </p>
            </div>
            <div className="flex gap-4">
              <a
                className={`flex gap-3 items-center font-semibold border-4 border-black px-4 py-2 ${
                  !post?.data.nextSlug && "opacity-55"
                }`}
                href={post?.data.nextSlug && `/article/${post?.data.nextSlug}`}
              >
                <ArrowLeft size={19} strokeWidth={2.5} />
                <p>Próximo Post</p>
              </a>
              <a
                className={`flex gap-3 items-center font-semibold border-4 border-black px-4 py-2 ${
                  !post?.data.previousSlug && "opacity-55"
                }`}
                href={
                  post?.data.previousSlug &&
                  `/article/${post?.data.previousSlug}`
                }
              >
                <p>Post Anterior</p>
                <ArrowRight size={19} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

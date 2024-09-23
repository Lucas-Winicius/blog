"use client"
import Article from "@/components/Article";
import ProfileError from "@/components/Profile.error";
import ProfileLoad from "@/components/Profile.load";
import axios from "@/shared/axios";
import { useQuery } from "@tanstack/react-query";
import { UserRound } from "lucide-react";

type ProfileRequest = {
  id: number
  name: string
  username: string
  role: string
  createdAt: string
  updatedAt: string
  posts: {
    image: string
    title: string
    subtitle: string
    slug: string
    createdAt: string
  }[]
}

export default function Profile({ params }: { params: { username: string } }) {
  const {
    isPending,
    isError,
    data: user,
    error,
  } = useQuery({
    queryKey: ["profile", params.username],
    queryFn: () => axios.get<ProfileRequest>(`/users/${params.username}`),
  });


  if (isPending) return <ProfileLoad />
  
  if (isError) return <ProfileError />

  return (
    <div className="flex md:flex-row flex-col md:items-start items-center gap-5 m-5">
      <div className="flex flex-col gap-4 items-center space-x-4 md:h-screen bg-slate-50 py-9 px-7 rounded-md w-full min-w-80 md:max-w-96">
        <div className="md:block hidden bg-stone-300 p-3 rounded-full border border-neutral-400">
          <UserRound size={150} strokeWidth={1} />
        </div>
        <div>
          <p className="font-bold text-center text-3xl">{user?.data.name}</p>
          <p className="text-sm text-center font-medium">@{user?.data.username}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-6 h-fit">
        {user?.data.posts.map(post => <Article key={post.slug} {...post} />)}
      </div>
    </div>
  );
}

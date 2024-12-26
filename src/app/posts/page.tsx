"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Heart, Home } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Search } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LikedUsersDialog from "../../custom-components/LikedUsersDialog";
import IsLiked from "../../custom-components/isLiked";
import { PostHeader } from "@/custom-components/PostHeader";
import { PostContent } from "@/custom-components/PostContent";
import { PostFooter } from "@/custom-components/PostFooter";

type likeTypes = {
  proImg: string;
  username: string;
  _id: string;
  email: string;
};

export type userType = {
  _id: string;
  proImg: string;
  username: string;
};

export type commentType = {
  comment: string;
  _id: string;
  userId: userType;
  postId: postType;
};

export type postType = {
  _id: string;
  caption: string;
  postImg: string;
  userId: userType;
  likes: likeTypes[];
  comments: commentType[];
}[];

const Page = () => {
  const [posts, setPosts] = useState<postType>([]);
  const getPosts = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      window.location.href = "/login";
    }
    const jsonData = await fetch(
      "https://instagram-backend-e3eq.onrender.com/post/getPosts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const response = await jsonData.json();
    setPosts(response);
    console.log(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="w-fit bg-black border-gray-700 border-r-0 border-l-0 rounded-none flex flex-col relative pb-8">
      <div className="text-white w-full flex justify-center text-3xl p-4">
        Instagram
      </div>
      <div className=" bg-black ">
        {posts?.map((post) => {
          return (
            <Card
              key={post._id}
              className="w-fit bg-black border-gray-700 border-r-0 border-l-0 rounded-none"
            >
              <PostHeader
                proImage={post.userId.proImg}
                username={post.userId.username}
                userId={post.userId._id}
              />
              <PostContent postImage={post.postImg} />
              <PostFooter
                likedUsers={post.likes}
                postId={post._id}
                postComments={post.comments}
              />
            </Card>
          );
        })}
      </div>
      <div className="w-screen fixed bottom-0 bg-black ">
        <Link className="w-2/4 bg-black" href={"/posts"}>
          <Button className="w-2/4 bg-black text-xl">
            <Home />
          </Button>
        </Link>
        <Link className="w-2/4 bg-black" href={"/search"}>
          <Button className="w-2/4 bg-black">
            <Search />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;

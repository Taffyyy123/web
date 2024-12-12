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

type likeTypes = {
  profileImage: string;
  username: string;
  _id: string;
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
    <div className=" bg-black relative">
      {posts?.map((post) => {
        return (
          <Card
            key={post._id}
            className="w-fit bg-black border-gray-700 border-r-0 border-l-0 rounded-none"
          >
            <CardHeader className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={post.userId.proImg} />
              </Avatar>
              <div className="text-white text-lg font-sans font-bold">
                {post.userId.username}
              </div>
            </CardHeader>
            <CardContent className="flex justify-center ">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    {" "}
                    <img src={post.postImg} className="w-screen" />
                  </CarouselItem>
                  <CarouselItem>
                    {" "}
                    <img src={post.postImg} className="w-screen" />
                  </CarouselItem>
                  <CarouselItem>
                    {" "}
                    <div>
                      <img src={post.postImg} className="w-screen" />\
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </CardContent>
            <CardFooter className="space-y-3">
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <Heart className="text-white" />
                  <MessageCircle className="text-white" />
                  <Send className="text-white" />
                </div>
                <Bookmark className="text-white" />
              </div>
              <div className="text-white text-sm font-sans font-bold">
                123 likes
              </div>
              {post.comments.length > 0 && (
                <div className="flex justify-start">
                  <Link
                    className="text-white text-sm font-sans font-bold"
                    href={`/posts/${post._id}`}
                  >
                    View all {post.comments.length} comments
                  </Link>
                </div>
              )}
            </CardFooter>
            <div className="w-screen fixed bottom-0 bg-black">
              <Link className="w-2/4 bg-black" href={"/posts"}>
                <Button className="w-2/4 bg-black">
                  <Home />
                </Button>
              </Link>
              <Link className="w-2/4 bg-black" href={"/search"}>
                <Button className="w-2/4 bg-black">
                  <Search />
                </Button>
              </Link>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Page;

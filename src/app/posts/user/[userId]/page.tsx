"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { userType } from "@/custom-components/isLiked";
import { postType } from "@/custom-components/PostFooter";
import { use, useEffect, useState } from "react";

const Page = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);
  const [user, setUser] = useState<userType | null>(null); // Use null for initial state

  const getUserData = async () => {
    const token = localStorage.getItem("accessToken");
    const jsonData = await fetch(
      `https://instagram-backend-e3eq.onrender.com/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const response = await jsonData.json();
    console.log(response);
    setUser(response);
  };

  useEffect(() => {
    getUserData();
  }, [userId]); // Add userId as dependency to refetch when it changes

  const postsCount = user?.posts?.length ?? 0; // Ensure a fallback of 0 if posts is undefined or null
  console.log(postsCount);

  return (
    <Card className="w-screen h-screen bg-black space-y-6 border-none rounded-none">
      <CardHeader className="flex justify-center pt-5 pb-0 gap-5">
        <div className="w-1/3  h-[100px] flex justify-center items-center">
          {user?.proImg == null ? (
            <Avatar className="w-3/4 h-3/4">
              <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" />
            </Avatar>
          ) : (
            <Avatar className="w-[77px] h-[77px]">
              <AvatarImage src={user.proImg} />
            </Avatar>
          )}
        </div>
        <div className="w-2/3 flex flex-col justify-center space-y-3">
          <div className="h-1/3 font-extrabold text-xl flex justify-start items-center text-white">
            {user?.username}
          </div>
          <button className="h-1/3 text-white w-3/4 bg-blue-600 font-sans font-bold text-base rounded-lg">
            Follow
          </button>
        </div>
      </CardHeader>
      <CardDescription className="w-screen flex flex-col items-center ">
        <div className="text-white font-sans font-bold w-5/6 ">
          {user?.fullname}
        </div>
        <div className="text-gray-400 w-5/6 font-sans font-medium ">
          {user?.bio}
        </div>
      </CardDescription>
      <CardContent className="flex w-screen border border-gray-500 border-r-0 border-l-0 justify-center pt-3 pb-3">
        <div className="text-gray-400 w-1/3 flex flex-col items-center">
          <p className="text-white font-bold">{postsCount}</p> posts
        </div>
        <div className="text-gray-400 w-1/3 flex flex-col items-center">
          <p className="text-white font-bold">8911</p> followers
        </div>
        <div className="text-gray-400 w-1/3 flex flex-col items-center">
          <p className="text-white font-bold">57</p> following
        </div>
      </CardContent>
      <CardFooter>
        {user?.posts?.map((post) => {
          return (
            <div className="text-white" key={post._id}>
              {post.postImg}
            </div>
          );
        })}
      </CardFooter>
    </Card>
  );
};
export default Page;

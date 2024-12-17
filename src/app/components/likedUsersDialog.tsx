"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
type likeTypes = {
  proImg: string;
  username: string;
  _id: string;
  email: string;
};

const SeeLikedUsers = ({ likedUsers }: { likedUsers: likeTypes[] }) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-black border-none flex justify-start">
        {likedUsers.length > 0 ? (
          <div className="text-white text-sm font-sans font-bold">
            {likedUsers.length} likes
          </div>
        ) : (
          <div>No like</div>
        )}
        d
      </DialogTrigger>
      <DialogContent className="bg-black text-white w-3/4">
        <DialogHeader>
          <DialogTitle className="text-white border-b-2 border-gray-500 w-full">
            Likes
          </DialogTitle>
          {likedUsers.map((like) => {
            const splitedEmail = like.email.split("@");
            return (
              <div key={like._id} className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={like.proImg} />
                </Avatar>
                <div className="flex flex-col justify-center">
                  <div className="text-white text-lg font-sans font-bold">
                    {like.username}
                  </div>
                  {splitedEmail[0] == like.username ? null : (
                    <div>{splitedEmail[0]}</div>
                  )}
                </div>
              </div>
            );
          })}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default SeeLikedUsers;

import { CardFooter } from "@/components/ui/card";
import IsLiked from "./isLiked";
import { Bookmark, MessageCircle, Send } from "lucide-react";
import LikedUsersDialog from "./LikedUsersDialog";
import Link from "next/link";

type likeTypes = {
  proImg: string;
  username: string;
  _id: string;
  email: string;
};
export type postType = {
  _id: string;
  caption: string;
  postImg: string;
  userId: userType;
  likes: likeTypes[];
  comments: commentType[];
}[];

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
export const PostFooter = ({
  likedUsers,
  postId,
  postComments,
}: {
  likedUsers: likeTypes[];
  postId: string;
  postComments: commentType[];
}) => {
  return (
    <CardFooter className="space-y-3 flex flex-col items-start">
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <IsLiked
            token={localStorage.getItem("accessToken") ?? ""}
            likedUsers={likedUsers}
            postId={postId}
          />
          <MessageCircle className="text-white " />
          <Send className="text-white" />
        </div>
        <Bookmark className="text-white" />
      </div>
      <LikedUsersDialog likedUsers={likedUsers} />
      {postComments.length > 0 && (
        <div className="flex justify-start">
          <Link
            className="text-white text-sm font-sans font-bold"
            href={`/posts/${postId}`}
          >
            View all {postComments.length} comments
          </Link>
        </div>
      )}
    </CardFooter>
  );
};

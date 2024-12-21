import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardHeader } from "@/components/ui/card";

export const PostHeader = ({
  proImage,
  username,
}: {
  proImage: string;
  username: string;
}) => {
  return (
    <CardHeader className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={proImage} />
      </Avatar>
      <div className="text-white text-lg font-sans font-bold">{username}</div>
    </CardHeader>
  );
};

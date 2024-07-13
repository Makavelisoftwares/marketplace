"use client";

import { LikePost } from "@/actions/like.action";
import { ThumbsUp } from "lucide-react";

export const Like = ({ postId, userId }) => {
  const handleLike = async () => {
    await LikePost(postId, userId);
  };

  return (
    <div onClick={handleLike} className="flex items-center space-x-2">
      <ThumbsUp />
      <span className="text-xs text-zinc-400">like</span>
    </div>
  );
};

"use client";

import { DisLikePost } from "@/actions/like.action";
import { ThumbsUp } from "lucide-react";

export const DisLike = ({ postId }) => {
  const handleDisLike = async () => {
    await DisLikePost(postId);
  };

  return (
    <div
      onClick={handleDisLike}
      className="flex items-center cursor-pointer space-x-2"
    >
      <ThumbsUp className="text-blue-500" />
      <span className="text-xs text-blue-500">liked</span>
    </div>
  );
};

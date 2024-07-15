"use client";
import { CreateView } from "@/actions/view.action";
import { BarChart2 } from "lucide-react";
import { useState } from "react";

export const PostViews = ({ postId }) => {
  const [countViews, setcountViews] = useState(0);

  const handleCount = async () => {
    const { post_views } = await CreateView(postId);
    setcountViews(post_views?.length);
  };

  return (
    <div onMouseLeave={handleCount} className="flex items-center space-x-2">
      <BarChart2 />
      <span className="text-xs text-zinc-400">{countViews}</span>
    </div>
  );
};

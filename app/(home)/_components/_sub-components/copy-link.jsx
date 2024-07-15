"use client";
import { LinkIcon } from "lucide-react";
import { toast } from "sonner";

export const CopyLink = ({ postId }) => {
  const handleCopy = () => {
    window.navigator.clipboard.writeText(
      `${window?.location?.origin}/share/${postId}`
    );
    toast.success("link copied to clipboard");
  };

  return (
    <div onClick={handleCopy} className="flex items-center space-x-2">
      <LinkIcon />
      <span className="text-xs text-zinc-400">share</span>
    </div>
  );
};

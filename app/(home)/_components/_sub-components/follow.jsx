"use client";
import { FollowUser } from "@/actions/follow.action";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { toast } from "sonner";

export const Follow = ({userId}) => {
  const handleFollow =async () => {
    try {
        await FollowUser(userId)
        toast.success("following")
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
      <Button
        onClick={handleFollow}
        variant="ghost"
        className="text-sky-900 space-x-2"
        size="sm"
      >
        <UserPlus />
        <span>Follow</span>
      </Button>
    </div>
  );
};

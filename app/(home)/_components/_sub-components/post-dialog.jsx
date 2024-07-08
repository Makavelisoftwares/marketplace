"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const PostDialog = () => {
  const handleVid = () => {
    const video = document.querySelector(".video");
    const image = document.querySelector(".image");

    if (!image.classList.contains("hidden")) {
      image.classList.add("hidden");
      video.classList.remove("hidden");
    }
  };

  const handleImg = () => {
    const video = document.querySelector(".video");
    const image = document.querySelector(".image");

    if (!image.classList.contains("hidden")) {
      image.classList.add("hidden");
      video.classList.remove("hidden");
    }
  };

  return (
    <Dialog>
      <DialogTrigger className=" w-full">
        <div className="w-full h-[20px] flex items-center border rounded-md border-zinc-400/50 text-zinc-300 p-5">
          Create a post
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start</DialogTitle>
        </DialogHeader>

        <div>
          <div onClick={handleVid}>video</div>
          <div>image</div>
        </div>

        <div className="video hidden">vidaa</div>
        <div className="image hidden">ima</div>
      </DialogContent>
    </Dialog>
  );
};

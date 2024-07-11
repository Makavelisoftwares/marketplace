"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/lib/uploadthing";
import { FileImage, FileVideo } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createPost } from "@/actions/post.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  content: z.string({
    required_error: "Enter content.",
  }),
  category: z.string({
    required_error: "Select a category.",
  }),
});

export const PostDialog = () => {
  const [categories, setcategories] = useState([]);
  const [Url, setUrl] = useState("");
  const [Img, setImg] = useState("");
  const [Vid, setVid] = useState("");

  const { refresh } = useRouter();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: "",
      category: "",
    },
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resp = await axios.get("/api/web/category");

        setcategories(resp?.data?.categories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  async function onSubmit(values) {
    const items = {
      content: values.content,
      categoryId: values.category,
      Url,
      Img,
      Vid,
    };
    const { create_a_post } = await createPost(items);

    if (create_a_post) {
      setImg("");
      setVid("");
      setUrl("");
      toast.success("post created waiting for moderation");
      window.location.reload()
    }
  }

  const handleVid = () => {
    const video = document.querySelector(".video");
    const image = document.querySelector(".image");

    if (video.classList.contains("hidden")) {
      image.classList.add("hidden");
      video.classList.remove("hidden");
    }
  };

  const handleImg = () => {
    const video = document.querySelector(".video");
    const image = document.querySelector(".image");

    if (image.classList.contains("hidden")) {
      video.classList.add("hidden");
      image.classList.remove("hidden");
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
          <DialogTitle>Create Post</DialogTitle>
          <DialogDescription>
            What are you offering? write it down and we will engage your post to
            the exact match of client to sell your service. You can add
            images(upto 4 image) or upload a video to further showcase your
            services.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-3">
          <div
            onClick={handleImg}
            className="cursor-pointer border-sky-400 border text-sky-600 p-2 rounded-md flex items-center space-x-2"
          >
            <FileImage />
            <span>upload image</span>
          </div>
          <div
            onClick={handleVid}
            className="cursor-pointer border-rose-400 border text-rose-600 p-2 rounded-md flex items-center space-x-2"
          >
            <FileVideo />
            <span>upload video</span>
          </div>
        </div>

        <ScrollArea className="h-[50vh]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3"
            >
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category for your service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories?.map((item, i) => (
                          <SelectItem key={i} value={item?.id}>
                            {item?.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content*</FormLabel>
                    <FormControl>
                      <Textarea placeholder="what i offer" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Label>Url/Link</Label>
                <Input
                  type="url"
                  placeholder="https://example.com"
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <div className="video hidden">
                <UploadDropzone
                  onClientUploadComplete={(res) => {
                    console.log(res[0].url);
                    setVid(res[0].url);
                  }}
                  onUploadError={(err) => {
                    alert(err);
                  }}
                  endpoint="client_video"
                />
              </div>
              <div className="image hidden">
                <UploadDropzone
                  onClientUploadComplete={(res) => {
                    console.log(res[0].url);
                    setImg(res[0].url);
                  }}
                  onUploadError={(err) => {
                    alert(err);
                  }}
                  endpoint="client_image"
                />
              </div>

              <Button
                type="submit"
                className="bg-sky-900 w-full hover:bg-sky-900 text-white"
              >
                Save Post
              </Button>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

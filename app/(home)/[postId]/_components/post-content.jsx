import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/utils/db";
import Image from "next/image";
import Link from "next/link";
import { LikesFollow } from "./_sub-components/likes-and-follows";

export const PostContent = async ({ postId }) => {
  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      Likes: {
        include: {
          user: true,
        },
      },
      Views: true,
    },
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <Card className="border-none shadow-none pt-2">
            <CardContent className="text-xs">
              <div>{post?.content}</div>
              {post?.url && (
                <Link
                  className="my-2 tracking-wider text-sm text-sky-600 underline cursor-pointer"
                  target="_blank"
                  href={post?.url}
                >
                  {post?.url}
                </Link>
              )}
              <div className="mt-2 border border-zinc-400">
                {post?.image && (
                  <div className="relative aspect-square">
                    <Image
                      src={post?.image}
                      fill
                      alt={post?.image}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1">
          <LikesFollow post={post}/>
        </div>
      </div>
    </div>
  );
};

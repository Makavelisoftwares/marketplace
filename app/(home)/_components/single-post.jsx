import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getPost } from "@/utils/getPosts";
import { Bookmark, MessageCircle, Repeat, ThumbsUp } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { Follow } from "./_sub-components/follow";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/utils/auth-options";

export const SinglePost = async ({ user }) => {
  const { posts } = await getPost();
  const session = await getServerSession(AuthOptions);
  const email = session?.user?.email;

  let following;
  for (let item of user?.Following) {
    following = item?.followingId;
  }

  return (
    <div className="space-y-2 mt-2">
      {posts.map((item, i) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="uppercase h-[50px] w-[50px] font-bold text-white rounded-full bg-sky-500 text-center flex items-center justify-center">
                  {item?.user?.name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold">
                    {item?.user?.name == user?.name ? "You" : item?.user?.name}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {moment(item?.createdAt).fromNow()}
                  </div>
                </div>
              </div>
              {following == item?.user?.id ? (
                <div className="text-sky-800 text-sm font-bold cursor-not-allowed">following</div>
              ) : (
                <div
                  className={cn(
                    "block",
                    item?.user?.email == email && "hidden"
                  )}
                >
                  <Follow userId={item?.user?.id} />
                </div>
              )}
            </div>
            <CardDescription className="my-2 ">
              {item?.content.slice(0, 250)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {item?.image && (
              <div className="relative aspect-video">
                <Image src={item?.image} fill alt="post" />
              </div>
            )}
            {item?.video && (
              <div>
                <Image src={item?.image} alt="post" />
              </div>
            )}

            <div className="flex w-full text-sm items-center justify-between">
              <div className="text-zinc-500">likes {item?.Likes?.length}</div>
              <div className="text-zinc-500">
                comments {item?.Likes?.length}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-zinc-300/30 items-center justify-evenly">
              <div className="col-span-1 cursor-pointer flex items-center space-x-2">
                <ThumbsUp />
                <span className="text-xs text-zinc-400">like</span>
              </div>
              <div className="col-span-1 cursor-pointer flex items-center space-x-2">
                <MessageCircle />
                <span className="text-xs text-zinc-400">comment</span>
              </div>

              <div className="col-span-1 cursor-pointer flex items-center space-x-2">
                <Bookmark />
                <span className="text-xs text-zinc-400">save</span>
              </div>

              <div className="col-span-1 cursor-pointer flex items-center space-x-2">
                <Repeat />
                <span className="text-xs text-zinc-400">repost</span>
              </div>
            </div>
          </CardContent>

          {/* <CardFooter className="border-t flex flex-col border-zinc-300/20"> */}

          {/* </CardFooter> */}
        </Card>
      ))}
    </div>
  );
};

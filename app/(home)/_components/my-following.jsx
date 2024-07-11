import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { db } from "@/utils/db";
import { getUserByEmail } from "@/utils/get-user";
import moment from "moment";

export const MyFollowings = async () => {
  const { user } = await getUserByEmail();

  const followings = await db.follow.findMany({
    where: {
      followerId: user?.id,
    },
    include: {
      following: true,
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Following</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className=" space-y-1">
          {followings?.map((item, i) => (
            <div
              key={i}
              className="flex items-center border-b border-zinc-300/30 mb-2 py-2 space-x-3"
            >
              <div className="uppercase flex p-1 items-center justify-center h-[25px] w-[25px] bg-rose-400 text-white rounded-full">
                {item?.following?.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold">{item?.following?.name}</div>
                <div className="text-xs text-zinc-400">
                  followed {moment(item?.createdAt).fromNow()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

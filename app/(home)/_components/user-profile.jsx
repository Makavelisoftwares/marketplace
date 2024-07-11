import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import moment from "moment";

export const UserProfile = ({ user }) => {
  return (
    <Card className="sticky top-12">
      <CardHeader className="flex space-y-2 items-center justify-center flex-col">
        <div className="text-4xl h-[70px] w-[70px] p-2 rounded-full text-white uppercase flex items-center justify-center bg-sky-800">
          {user?.name[0]}
        </div>

        <div className="text-2xl text-zinc-800 uppercase">{user?.name}</div>

        <div className="text-xs text-zinc-400">
          Joined {moment(user?.createdAt).format("DD/MM/YYYY")}
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <span className="text-zinc-400 text-sm">
              Followers {user?.FollowedBy?.length}
            </span>
          </div>
          <div>
            <span className="text-zinc-400 text-sm">
              Following {user?.Following?.length}
            </span>
          </div>
        </div>
      </CardHeader>
      <Separator />

      <CardContent>
        <div className="text-zinc-400 text-sm">Profile views 0</div>
        <div className="text-zinc-400 text-sm">Saved posts 0</div>
      </CardContent>
    </Card>
  );
};

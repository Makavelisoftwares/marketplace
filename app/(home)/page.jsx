import { AuthOptions } from "@/utils/auth-options";
import { db } from "@/utils/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PostDialog } from "./_components/_sub-components/post-dialog";
import { SinglePost } from "./_components/single-post";
import { UserProfile } from "./_components/user-profile";
// import { FileImage, FileVideo2, ListPlusIcon } from "lucide-react";

export default async function Home() {
  const session = await getServerSession(AuthOptions);
  const email = session?.user?.email;

  console.log(email);

  if (!email) {
    redirect("/auth/sign-in");
  }

  const getUser = await db.user.findUnique({
    where: {
      email,
    },
    include: {
      Post: true,
      Following: true,
      FollowedBy: true,
      Likes: true,
    },
  });

  if (getUser?.Role == "SUPERADMINISTRATOR" || getUser?.Role == "MODERATOR") {
    return redirect("/dashboard");
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-1 sticky top-12">
        <UserProfile user={getUser} />
      </div>
      <div className="col-span-2">
        <div className="">
          <div className="flex sticky z-50 bg-white top-12 items-center space-x-2">
            <div className="uppercase bg-emerald-950 text-white h-[50px] w-[50px] font-bold flex items-center justify-center">
              {getUser?.name[0]}
            </div>

            <PostDialog />
          </div>

          <div>
            <SinglePost  />
          </div>
        </div>
      </div>
      <div className="col-span-1">follow</div>
    </div>
  );
}

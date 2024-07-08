import { AuthOptions } from "@/utils/auth-options";
import { db } from "@/utils/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PostDialog } from "./_components/_sub-components/post-dialog";
import { FileImage, FileVideo2, ListPlusIcon } from "lucide-react";

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
  });

  if (getUser?.Role == "SUPERADMINISTRATOR" || getUser?.Role == "MODERATOR") {
    return redirect("/dashboard");
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-1">profile</div>
      <div className="col-span-2">
        <div className="border-b border-zinc-400/30">
          <div className="flex items-center space-x-2">
            <div className="uppercase bg-emerald-950 text-white h-[50px] w-[50px] font-bold flex items-center justify-center">
              {getUser?.name[0]}
            </div>

            <PostDialog />
          </div>

          <div className="grid grid-cols-6 py-2 gap-5">
            <div className="col-span-2 flex items-center justify-center">
              <FileVideo2 className="text-rose-500" />
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <FileImage className="text-amber-500" />
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <ListPlusIcon className="text-orange-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">follow</div>
    </div>
  );
}

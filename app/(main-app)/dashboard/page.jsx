import { getUserByEmail } from "@/utils/get-user";
import React from "react";
import { ItemCard } from "./_components/item-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { redirect } from "next/navigation";

async function DashboardPage() {
  const { user } = await getUserByEmail();

  if(user?.Blocked){
    redirect("/auth/sign-in")
  }

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>
          Get the entire overview of the platform and manage all necessary
          resources within the platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className=" p-2 mb-3 col-span-1 border border-zinc-200 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-500 text-white">
                <Wallet className="h-[70px] w-[70px] p-2" />
              </div>
              <div className="font-bold text-2xl">KES 20k</div>
            </div>
          </div>

          <div className=" p-2 mb-3 flex-col border col-span-1 border-zinc-200 flex ">
            <div className="text-lg ">Monthly Collection</div>

            <div className="flex items-center space-x-2">
              <div className="bg-rose-500 text-white">
                <Wallet className="h-[70px] w-[70px] p-2" />
              </div>
              <div className="font-bold text-2xl">KES 20k</div>
            </div>
          </div>

          <div className=" p-2 mb-3 border flex-col col-span-1 border-zinc-200 flex ">
            <div className="text-lg">Annual Collection</div>
            <div className="flex items-center space-x-2">
              <div className="bg-amber-500 text-white">
                <Wallet className="h-[70px] w-[70px] p-2" />
              </div>
              <div className="font-bold text-2xl">KES 20k</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <ItemCard
            title="POSTS"
            today={2773}
            total={278189}
            description="These are the total number of posts uploaded"
            className="col-span-1"
          />

          <ItemCard
            title="REGISTERED USERS"
            today={262}
            total={27722}
            description="These are the total number of registered users on the platform"
            className="col-span-1"
          />

          <ItemCard
            title="MODERATORS"
            today={10}
            total={200}
            description="These are the total number of registered moderators on the platform"
            className="col-span-1"
          />

          <ItemCard
            title="REJECTED POSTS"
            today={100}
            total={1788}
            description="These are the total number of rejected posts on the platform"
            className="col-span-1"
          />

          <ItemCard
            title="FEEDBACK MESSAGES"
            today={0}
            total={30}
            description="These are the total number of feedbacks messages from users on the platform"
            className="col-span-1"
          />

          <ItemCard
            title="REPORTS"
            today={0}
            total={10}
            description="These are the total number of post reports sent from users on the platform"
            className="col-span-1"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default DashboardPage;

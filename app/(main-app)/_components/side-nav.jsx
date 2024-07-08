"use client";

import { cn } from "@/lib/utils";
import { AnimationLink } from "@/utils/page-transition";
import {
  AlertCircle,
  Edit,
  Layout,
  List,
  LogOut,
  MessageCircle,
  UsersRound,
  Wallet,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export const SideNav = ({ user }) => {
  const path = usePathname();

  const Links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <Layout />,
      tooltip: "Dashboard overview",
    },
    {
      name: "Categories",
      href: "/dashboard/category",
      icon: <List />,
      tooltip: "Manage and Moderate all posts",
    },
    {
      name: "Posts",
      href: "/dashboard/post",
      icon: <Edit />,
      tooltip: "Manage and Moderate all posts",
    },
    {
      name: "Manage users",
      href: "/dashboard/user",
      icon: <UsersRound />,
      tooltip: "Manage and all users",
    },
    {
      name: "Billings",
      href: "/dashboard/billing",
      icon: <Wallet />,
      tooltip: "View all billings",
    },
    {
      name: "Feedbacks",
      href: "/dashboard/feedback",
      icon: <MessageCircle />,
      tooltip: "User feedbacks",
    },
    {
      name: "Reports",
      href: "/dashboard/report",
      icon: <AlertCircle />,
      tooltip: "User feedbacks",
    },
  ];

  return (
    <div className="flex flex-col justify-between bg-blue-300/10 h-full">
      <div>
        <div className="tracking-widest text-lg font-bold mb-4 p-2">Logo</div>
        {Links?.map((item, i) => (
          <AnimationLink
            href={item?.href}
            key={i}
            className={cn(
              "w-full p-4 flex items-center space-x-2",
              path == item?.href && "bg-sky-700 text-white"
            )}
          >
            <span
              className={cn(
                "",
                path == item?.href && "animate-spin duration-1000 repeat-1"
              )}
            >
              {item?.icon}
            </span>
            <div>{item?.name}</div>
          </AnimationLink>
        ))}
      </div>

      <div>
        <div className="flex items-center p-2 space-x-1">
          <div className="w-[30px] h-[30px] uppercase flex items-center justify-center font-bold text-white text-center bg-emerald-950">
            {user?.name[0]}
          </div>
          <div>
            <div className="text-sm font-bold">{user?.name}</div>
            <div className="text-xs text-zinc-500">{user?.email}</div>
          </div>
        </div>
        <div
          onClick={() =>
            signOut({ callbackUrl: window?.location?.origin, redirect: true })
          }
          className="flex p-2 font-bold cursor-pointer items-center space-x-3"
        >
          <LogOut />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

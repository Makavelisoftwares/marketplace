import React from "react";
import { SideNav } from "./_components/side-nav";
import { HeaderNav } from "./_components/header-nav";
import { getUserByEmail } from "@/utils/get-user";


async function DshboardLayout({ children }) {
  const {user}=await getUserByEmail()
  return (
    <div>
      <div className="">
        <div className="w-[240px] border-r border-zinc-300/40 h-screen fixed">
          <SideNav user={user}/>
        </div>
        <div className="ml-[240px]">
          <div className="top-0 bg-white sticky border-b border-b-zinc-300/40">
            <HeaderNav user={user} />
          </div>
          <div className="p-3" >{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DshboardLayout;

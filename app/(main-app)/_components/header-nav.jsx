import { ChevronDown, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const HeaderNav = ({ user }) => {
  return (
    <div className="p-3 flex items-center justify-between">
      <div>
        <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white flex items-center space-x-2">
          <div>{user?.Role}</div>
          <ShieldCheck />
        </Badge>
      </div>
      <div className="flex space-x-2">
        <div className="uppercase flex font-bold items-center justify-center bg-emerald-800 text-white h-[35px] w-[35px] text-lg">
          {user?.name[0]}
        </div>

        <div className="flex items-center space-x-2">
          <div>
            <div className="text-sm font-bold">{user?.name}</div>
            <div className="text-xs text-zinc-500">{user?.email}</div>
          </div>
          <div>
            <ChevronDown className="h-[25px] w-[25px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

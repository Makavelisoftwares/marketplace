"use client";

import {
  CheckCircle,
  CircleSlash2,
  MoreVertical,
  ShieldAlert,
  ShieldCheck,
  UserCheck2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
export function DropDownMenu({ item }) {
  const [isMounted, setisMounted] = useState(false);
  const { refresh } = useRouter();

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleUnblock = async (id) => {
    try {
      await axios.put("/api/web/unblock-user", { id });

      toast.success(`${item?.name} has been unblocked`);

      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlock = async (id) => {
    try {
      await axios.put("/api/web/block-user", { id });

      toast.success(`${item?.name} has been blocked`);

      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuperAdmin = async (id) => {
    try {
      await axios.put("/api/web/role/super-admin", { id,Role:"SUPERADMINISTRATOR" });

      toast.success(`${item?.name} is now a superadministrator`);

      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleModerator = async (id) => {
    try {
      await axios.put("/api/web/role/moderator", { id,Role:"MODERATOR" });

      toast.success(`${item?.name} is now a moderator`);

      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleclient  = async (id) => {
    try {
      await axios.put("/api/web/role/client", { id,Role:"CLIENT" });

      toast.success(`${item?.name} is now a client`);

      refresh();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn("", item?.Role == "SUPERADMINISTRATOR" && "hidden")}
        asChild
      >
        <Button variant="outline">
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Manage {item?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => handleBlock(item?.id)}
            disabled={item?.Blocked}
          >
            <CircleSlash2 className="mr-2 h-4 w-4" />
            <span>Block</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleUnblock(item?.id)}
            disabled={!item?.Blocked}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            <span>Unblock</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuLabel>Change {item?.name} Role</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => handleSuperAdmin(item?.id)}
            disabled={item?.Role == "SUPERADMINISTRATOR"}
          >
            <ShieldCheck className="mr-2 h-4 w-4" />
            <span>Superadministrator</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleModerator(item?.id)}
            disabled={item?.Role == "MODERATOR"}
          >
            <ShieldAlert className="mr-2 h-4 w-4" />
            <span>Moderator</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleclient(item?.id)}
            disabled={item?.Role == "CLIENT"}
          >
            <UserCheck2 className="mr-2 h-4 w-4" />
            <span>Client</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

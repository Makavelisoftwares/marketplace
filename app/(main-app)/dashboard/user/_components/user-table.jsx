import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DropDownMenu } from "./_sub-components/drop-down-menu";

export const UserTable = ({ users }) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Block</TableHead>
          <TableHead>Actions</TableHead>
        </TableHeader>
        <TableBody>
          {users?.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item?.name}</TableCell>
              <TableCell>{item?.email}</TableCell>
              {item?.Role == "SUPERADMINISTRATOR" && (
                <TableCell>
                  <Badge className="bg-emerald-600 lowercase text-white text-sm">
                    {item?.Role}
                  </Badge>
                </TableCell>
              )}
              {item?.Role == "MODERATOR" && (
                <TableCell>
                  <Badge className="bg-rose-600 lowercase text-white text-sm">
                    {item?.Role}
                  </Badge>
                </TableCell>
              )}
              {item?.Role == "CLIENT" && (
                <TableCell>
                  <Badge className="bg-amber-600 lowercase text-white text-sm">
                    {item?.Role}
                  </Badge>
                </TableCell>
              )}
              <TableCell>
                {item?.Blocked ? (
                  <span className="cursor-not-allowed text-zinc-300 text-sm">
                    blocked
                  </span>
                ) : (
                  <span className="text-zinc-800 font-bold text-sm">
                    active
                  </span>
                )}
              </TableCell>
              <TableCell>
                <DropDownMenu item={item} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

import { getCategories } from "@/actions/category.action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteCategory } from "./_sub-components/delete-category";
import { FolderOpen } from "lucide-react";

export const CategoryTable = async () => {
  const categories = await getCategories();

  return (
    <div className="mt-2">
      {categories?.length < 1 ? (
        <div className="flex mt-20 items-center text-zinc-500 justify-center space-y-3 flex-col">
          <div>
            <FolderOpen className="h-[55px] w-[55px] text-zinc-500"/>
          </div>
          <div>Category List is Empty. Start Adding Categories</div>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
          </TableHeader>
          <TableBody>
            {categories?.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{item?.name}</TableCell>
                <TableCell>
                  <DeleteCategory id={item?.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

export const ProductTable = () => {
  return (
    <Table className="border border-zinc-300">
      <TableHeader className="border-b py-1 border-zinc-300/30">
        <TableHead>Product SNo.</TableHead>
        <TableHead>Product Name</TableHead>
        <TableHead>Product Image</TableHead>
        <TableHead>Product Quantity</TableHead>
        <TableHead>Product Cost price</TableHead>
        <TableHead>Product Selling Price</TableHead>

        <TableHead>Product Category</TableHead>
        <TableHead>Action</TableHead>
      </TableHeader>
      <TableBody>
        <TableRow className="even:bg-zinc-200/20">
          <TableCell>873783</TableCell>
          <TableCell className="font-bold">Black Rope</TableCell>
          <TableCell>
            <Image
              src="/vercel.svg"
              alt="product-image"
              height={70}
              width={70}
            />
          </TableCell>
          <TableCell>488</TableCell>
          <TableCell>10</TableCell>
          <TableCell>12</TableCell>

          <TableCell>Electronic</TableCell>

          <TableCell>
            <MoreVertical />
          </TableCell>
        </TableRow>
        <TableRow className="even:bg-zinc-200/20">
          <TableCell>873783</TableCell>
          <TableCell className="font-bold">Black Rope</TableCell>
          <TableCell>
            <Image
              src="/vercel.svg"
              alt="product-image"
              height={70}
              width={70}
            />
          </TableCell>
          <TableCell>488</TableCell>
          <TableCell>10</TableCell>
          <TableCell>12</TableCell>

          <TableCell>Electronic</TableCell>

          <TableCell>
            <MoreVertical />
          </TableCell>
        </TableRow>
        <TableRow className="even:bg-zinc-200/20 ">
          <TableCell>873783</TableCell>
          <TableCell className="font-bold">Black Rope</TableCell>
          <TableCell>
            <Image
              src="/vercel.svg"
              alt="product-image"
              height={70}
              width={70}
            />
          </TableCell>
          <TableCell>488</TableCell>
          <TableCell>10</TableCell>
          <TableCell>12</TableCell>

          <TableCell>Electronic</TableCell>

          <TableCell>
            <MoreVertical />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

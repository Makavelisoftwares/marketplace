"use client";

import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const DeleteCategory = ({ id }) => {
  const { refresh } = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/web/category?id=${id}`);

      toast.success("deleted");
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Trash2 onClick={handleDelete} className="text-rose-500 cursor-pointer" />
    </div>
  );
};

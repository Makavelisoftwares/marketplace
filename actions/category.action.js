"use server";

import { db } from "@/utils/db";
import { revalidatePath } from "next/cache";

export const CreateCategory = async (name) => {
  if (!name) return;

  await db.category.create({
    data: {
      name,
    },
  });

  revalidatePath("/dashboard/category");
};

export const getCategories = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return categories;
};

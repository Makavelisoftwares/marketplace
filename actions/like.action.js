"use server";

import { db } from "@/utils/db";
import { revalidatePath } from "next/cache";

export const LikePost = async (postId, userId) => {
  await db.likes.create({
    data: {
      postId,
      userId,
    },
  });

  revalidatePath("/");
};

export const DisLikePost = async (postId) => {
  await db.likes.deleteMany({
    where: {
      postId,
    },
  });

  revalidatePath("/");
};

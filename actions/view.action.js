"use server";

import { db } from "@/utils/db";
import { getUserByEmail } from "@/utils/get-user";
import { revalidatePath } from "next/cache";

export const CreateView = async (postId) => {
  const { user } = await getUserByEmail();

  await db.views.create({
    data: {
      userId: user?.id,
      postId,
    },
  });

  const post_views = await db.views.findMany({
    where: {
      postId,
    },
  });

  revalidatePath("/");
  return { post_views };
};

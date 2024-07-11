"use server";

import { db } from "@/utils/db";
import { getUserByEmail } from "@/utils/get-user";
import { revalidatePath } from "next/cache";

export const createPost = async (items) => {
  const { content, categoryId, Url, Img, Vid } = items;
  const { user } = await getUserByEmail();

  try {
    const create_a_post = await db.post.create({
      data: {
        content,
        url: Url,
        categoryId,
        userId: user?.id,
        video: Vid,
        image: Img,
      },
    });

    console.log(create_a_post)

    revalidatePath("/");

    return { create_a_post };
  } catch (error) {
    console.log(error);
  }

  console.log(content, categoryId, Url, Img, Vid);
};

"use server";

import { db } from "@/utils/db";
import { getUserByEmail } from "@/utils/get-user";
import { revalidatePath } from "next/cache";

export const FollowUser = async (tofollowId) => {
  const { user } = await getUserByEmail();
  try {
    const following = await db.follow.create({
      data: {
        followingId: tofollowId,
        followerId: user?.id,
      },
    });

    console.log(following);
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

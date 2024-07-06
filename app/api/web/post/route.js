import { db } from "@/utils/db";
import { getUserByEmail } from "@/utils/get-user";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { user } = await getUserByEmail();

    const { categoryId, content, image, video, price, url } = await req.json();

    await db.post.create({
      data: {
        userId: user?.id,
        categoryId,
        content,
        image,
        video,
        price,
        url,
      },
    });

    return NextResponse.json("success", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

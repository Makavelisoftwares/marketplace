import { db } from "@/utils/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const DELETE = async (req) => {
  try {
    const id = new URL(req.url).searchParams.get("id");
    await db.category.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("success",{status:200})
  } catch (error) {
    console.log(error);
  }
};

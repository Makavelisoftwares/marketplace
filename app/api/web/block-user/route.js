import { db } from "@/utils/db";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  try {
    const { id } = await req.json();
    await db.user.update({
      data: {
        Blocked: true,
      },
      where: {
        id,
      },
    });

    return NextResponse.json({success:"blocked"},{status:200})
  } catch (error) {
    console.log(error);
  }
};

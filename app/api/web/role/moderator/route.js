import { db } from "@/utils/db";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  try {
    const { id, Role } = await req.json();

    await db.user.update({
      data: {
        Role: Role,
      },
      where: {
        id,
      },
    });

    return NextResponse.json({success:"success"},{status:200})

  } catch (error) {
    console.log(error);
  }
};

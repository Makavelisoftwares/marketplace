import { NextResponse } from "next/server";
import { db } from "@/utils/db";

import bcrypt from "bcrypt";
export const POST = async (req) => {
  try {
    const { firstname, lastname, email, password } = await req.json();

    if (!firstname || !lastname || !email || !password) {
      return NextResponse.json({ err: "check your fields" }, { status: 400 });
    }

    const getAllUsers = await db.user.findMany();

      // CHECK THE EMAIL ADDRESS IF IT ALREADY EXISTS
    const User = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (User) {
      return NextResponse.json(
        { err: "email is already taken" },
        { status: 400 }
      );
    }

      // HASH THE PASSWORD
    const hashPassword = await bcrypt.hash(password, 10);

      // CREATE THE USER INTO THE DATABASE
    await db.user.create({
      data: {
        email,
        password: hashPassword,
        firstname,
        lastname,
        name: `${firstname} ${lastname}`,
      },
    });

    await db.user.update({
      data : { Role: "SUPERADMINISTRATOR" },
      where: {
        id: getAllUsers[0]?.id,
      },
    });

    return NextResponse.json({ success: "Account created" }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

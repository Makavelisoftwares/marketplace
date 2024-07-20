"use server";

import { db } from "@/utils/db";

export const createBusiness = async (userId, name) => {
  if (!name) {
    return { error: "provide a business name" };
  }
  const business = await db.business.create({
    data: {
      userId,
      name,
    },
  });

  return { id: business?.id };
};

"use server";

import { db } from "@/utils/db";
import { revalidatePath } from "next/cache";

export const createProduct = async (
  b_id,
  name,
  description,
  costprice,
  sellprice,
  quantity,
  categoryId,
  supplierId
) => {
  if (
    !name ||
    !description ||
    !costprice ||
    !sellprice ||
    !quantity ||
    !categoryId ||
    !supplierId ||
    !b_id
  ) {
    return { error: "Missing field" };
  }

  const new_costprice = parseFloat(costprice);
  const new_sellprice = parseFloat(sellprice);
  const new_quantity = parseFloat(quantity);


  await db.product.create({
    data: {
      businessId: b_id,
      categoryId,
      costprice:new_costprice,
      sellprice:new_sellprice,
      description,
      name,
      quantity:new_quantity,
      supplierId,
    },
  });

  revalidatePath(`/business/${b_id}/product`);

  return { success: "product has been saved" };
};

export const getProducts = async (b_id) => {
  const products = await db.product.findMany({
    where: {
      businessId: b_id,
    },
    include: {
      category: true,
      supplier: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return { products };
};

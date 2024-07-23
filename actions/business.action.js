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


export const getBusiness=async(b_id)=>{
  const biz=await db.business.findUnique({
    where:{
      id:b_id
    },
    include:{
      Product:{
        include:{
          category:true,
          supplier:true
        }
      }
    }
  })

  return {biz}
}

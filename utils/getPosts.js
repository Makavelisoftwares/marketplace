import { db } from "./db";

export const getPost = async () => {
  const posts = await db.post.findMany({
    include: {
      category:true,
      Comments:true,
      Likes:true,
      user:true,
      DisLikes:true,
    },
    orderBy:{
        createdAt:"desc"
    }
  });


  return { posts };
};

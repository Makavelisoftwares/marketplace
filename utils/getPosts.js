import { db } from "./db";

export const getPost = async () => {
  const posts = await db.post.findMany({
    include: {
      category: true,
      Likes   : true,
      user    : true,
      DisLikes: true,
      Views   : true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return { posts };
};

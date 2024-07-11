import { getUserByEmail } from "@/utils/get-user";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
  const { user: User } = await getUserByEmail();

  const Id = User?.id;

  if (!Id) {
    console.log("Unauthorized");
  }

  return {
    userId: Id,
  };
};

export const ourFileRouter = {
  client_video: f({ video: { maxFileSize: "1024MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      console.log(file.url, metadata);
    }),

  client_image: f({ image: { maxFileSize: "4MB", maxFileCount: 4 } })
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      console.log(file.url, metadata);
    }),
};
